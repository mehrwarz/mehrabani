export const userRoles = {
  "User": ["VIEW_OWN"],
  "Editor": ["VIEW_OWN", "EDIT_OTHERS"],
  "Viewer": ["VIEW_OWN", "VIEW_OTHERS"],
  "Moderator": ["VIEW_OWN", "VIEW_OTHERS", "REGISTER_USERS", "MODIFY_ACCESS"],
  "Admin": ["FULL_CONTROL"],
  "System Admin": ["SUPER_ADMIN"]
}
