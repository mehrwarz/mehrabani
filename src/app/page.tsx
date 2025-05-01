export default function Home() {
  return (
    <div className="main">
      <h1>Home page. </h1>
      <div className="p-4">
      <div style={{ "backgroundImage": "url('/Images/Screenshot From 2025-04-29 21-34-45.png')", "backgroundSize": "cover" }} >

        <svg height={300} width={360}>
          <g>
            <path stroke="#f00" strokeWidth={2} fill="none" d="
              M 30,195 
              L 30,30 10,30 10,220
              C 50 230, 120 250, 190 300
              L 190 290
              C 150 250, 80,200 30 195
              Q 60 200 z"
             />
            <path stroke="#f00" strokeWidth={3} fill="none"
            d="
              M 190,300 
              C 270 250, 290 240, 380 220
              L 380,30 370,30 370,185
              C 300 210, 232 250, 190,290
              Z
            " />
          </g>

          <g>
            <path fill="#cfd" stroke="#f00" strokeWidth={3} d="
            M 175,250
            C 140 210, 90 190, 60 180
            L 60 10
            C 170 87, 195 120, 195 190
            C 170 130, 120 100, 90 80
            L 90,170
            C 120 190, 150 215, 178 250
            Z
            
            "/>
          </g>

           <path stroke="#f00" strokeWidth={3} fill="none" 
           d="
           M 195,190
           C 200 130, 215 110, 320 0
           L 320 50
           C 310 60, 300 75, 270 100
           C 230 140, 215 155, 200 180
           Z
           "
           />

<path stroke="#f00" strokeWidth={3} fill="none" 
           d="
           M 320,90 
           L 320 140

           " />
        </svg>
      </div>
      </div>
    </div >
  );
}
