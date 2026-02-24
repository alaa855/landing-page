

const form = document.getElementById("registration-form")

const fullname = document.getElementById("user-name")

const email = document.getElementById("user-email")


const Plan = document.getElementById("user-plan")


const checkt = document.getElementById("user-terms")

form.addEventListener("submit" , (event) => {
    console.log("Form submit event triggered")
    event.preventDefault()
    console.log("preventDefault() called")
    const v = fullname.value
    if (v === "") {
        const p = document.getElementById("visibele")
        p.style.visibility =  "visible"
        document.getElementById("user-name").style.border = "solid red"
        document.getElementById("full-name").style.color = "red"
        p.style.color = "red"
    }

    const f = email.value.includes ("@") && email.value.includes (".")
    if(f === false) {
        document.getElementById("name-email").style.color = "red"
        document.getElementById("user-email").style.border = " solid red"
        document.getElementById("vis-email").style.visibility = "visible"
        document.getElementById("vis-email").style.color = "red"
    }


    const r = Plan.value
    if( r === "") {
        document.getElementById("name-plan").style.color = "red"
        document.getElementById("user-plan").style.border = " solid red"
        document.getElementById("vis-Plan").style.visibility = "visible"
        document.getElementById("vis-Plan").style.color = "red"
    }


    const t = checkt.checked
    if( t === false) {
        document.getElementById("name-terms").style.color = "red"
        document.getElementById("user-terms").style.border = " solid red"
        document.getElementById("vis-terms").style.visibility = "visible"
        document.getElementById("vis-terms").style.color = "red"

    }

    if(r === "Basic"){
        document.getElementById("vis-basic").style.visibility = "visible"
        
    }

    if(r === "Pro"){
        document.getElementById("vis-pro").style.visibility = "visible"
        
    }

    if(r === "Enterprise"){
        document.getElementById("vis-enterprise").style.visibility = "visible"
    }

    return
}
)

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el) => {
    observer.observe(el);
});




