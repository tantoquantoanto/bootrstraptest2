const menuItems = [
    { title: "Dashboard", icon: "cube-outline" },
    { title: "UI Elements", icon: "albums-outline" },
    { title: "Form elements", icon: "browsers-outline" },
    { title: "Charts", icon: "bar-chart-outline" },
    { title: "Tables", icon: "people-outline" },
    { title: "Icons", icon: "bug-outline" },
    { title: "User Pages", icon: "documents-outline" },
    { title: "Error pages", icon: "cube-outline" },
    { title: "Documentation", icon: "cube-outline" }
]


const menu = document.querySelector(".menu");


const createMenuItem = (item) => {
    const li = document.createElement("li");
    const icon = document.createElement("ion-icon");
    icon.setAttribute("name", item.icon)
    const span = document.createElement("span");
    span.textContent = item.title
    span.setAttribute("class", "ms-3")
    li.append(icon, span)
    li.setAttribute("class", "d-flex align-items-center px-2 py-3")
    menu.appendChild(li)
    
}

menuItems.forEach(menuItem => {
    createMenuItem(menuItem)
})





