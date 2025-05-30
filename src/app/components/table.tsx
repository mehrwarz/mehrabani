"use client";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

export default function Table({ id, heading, data }: { id: string; heading: string[]; data: string[][] }) {
  useEffect(() => {
  const interval = setInterval(() => {
    if ($(`#${id}`).length && typeof $.fn.DataTable === "function") {
      clearInterval(interval); // Stop checking
      $(`#${id}`).DataTable({
        data: data,
        columns: [
          data[1],
          data[2],
          data[3],
          data[4],
          {
            'val': data[5],
            'render': function(val) {
              return "(" + val + ")"
            }
          },
          data[6],
        ]
      });

      $("#multi-filter-select").DataTable({
        pageLength: 5,
        initComplete: function () {
          this.api()
            .columns()
            .every(function () {
              var column = this;
              var select = $('<select class="form-select"><option value=""></option></select>')
                .appendTo($(column.footer()).empty())
                .on("change", function () {
                  var val = $.fn.dataTable.util.escapeRegex($(this).val());
                  column.search(val ? "^" + val + "$" : "", true, false).draw();
                });

              column.data().unique().sort().each(function (d) {
                select.append(`<option value="${d}">${d}</option>`);
              });
            });
        },
      });

      $("#add-row").DataTable({
        pageLength: 5,
      });

      var action = `
        <td>
          <div class="form-button-action">
            <button type="button" class="btn btn-link btn-primary btn-lg"><i class="fa fa-edit"></i></button>
            <button type="button" class="btn btn-link btn-danger"><i class="fa fa-times"></i></button>
          </div>
        </td>`;

      $("#addRowButton").click(function () {
        $("#add-row")
          .dataTable()
          .fnAddData([
            $("#addName").val(),
            $("#addPosition").val(),
            $("#addOffice").val(),
            action,
          ]);
        $("#addRowModal").modal("hide");
      });
    }
  }, 500); // Check every 500ms

  return () => clearInterval(interval); // Cleanup interval on unmount
}, [id]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/dataTables.css" />
      </Head>
      <div className="table-responsive">
        <table id={id} className="display table table-striped table-hover">
          <thead>
            <tr>
              {heading.map((head, index) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </thead>
          <tfoot>
            <tr>
              {heading.map((head, index) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </tfoot>
          {/* <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
      <Script defer src="/assets/js/core/jquery-3.7.1.js"></Script>
      <Script defer src="/assets/js/plugin/datatables/datatables.min.js"></Script>
    </>
  );
}

