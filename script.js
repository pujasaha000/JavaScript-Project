submit.addEventListener("click", (e) => {
    e.preventDefault ()
    let a= title.value
    let b= desc.value
    localStorage.setItem("todo", JSON.stringify([a, b]))
    console.log (e)
    todo.innerHTML= `
    <h1>${a}</h1>
    <p>${b}</p>
    `
    title.value= ""
    desc.value= ""
  })
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault ()
    localStorage.removeItem ("todo")
    todo.innerHTML= ""
  })