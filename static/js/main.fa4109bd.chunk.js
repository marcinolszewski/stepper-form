(this.webpackJsonpstepper_form=this.webpackJsonpstepper_form||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),s=a.n(c),l=(a(15),a(3)),o=a(7),i=a(4),m=a(5),u=a(8),p=a(6),h=a(9),d=function(e){var t=e.placeholder,a=e.name,n=e.className,c=e.value,s=e.onInputChange,l=e.inputType;return r.a.createElement("label",{htmlFor:a,className:"form__label ".concat(n)},a,":",r.a.createElement("input",{name:a,type:l,className:"form__input",placeholder:t,value:c,onChange:s}))},v=function(e){var t=e.children,a=e.activeStep===t;return r.a.createElement("div",{className:"legend__indicator ".concat(a?"active":"")},t)},E=function(e){var t=e.changeInput,a=e.btnClass,n=e.children;return r.a.createElement("button",{onClick:t,className:a},n)},f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={activeStep:1,stepsArr:[1,2,3],name:"",age:"",email:"",typ:!1,spinner:!1,error:!1,errors:["Plase enter your name","Plase enter your age","Plase enter valid email"]},a.readCookie=function(){var e=document.cookie.split("-");return Object(o.a)(e)},a.showError=function(){a.setState({error:!0}),setTimeout((function(){a.setState({error:!1})}),1500)},a.showSpinner=function(){a.setState({spinner:!0}),setTimeout((function(){a.setState({spinner:!1}),setTimeout((function(){a.setState({typ:!0})}),0)}),1500)},a.checkForErrors=function(){switch(a.state.activeStep){case 1:return""!==a.state.name||a.showError();case 2:return""!==a.state.age||a.showError();case 3:return!(""===a.state.email||!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g.test(a.state.email))||a.showError();default:return!1}},a.updateState=function(e){a.setState(Object(l.a)({},e.target.name.toLowerCase(),e.target.value))},a.handleNext=function(e){e.preventDefault(),3!==a.state.activetep&&a.checkForErrors()&&a.setState({activeStep:a.state.activeStep+1,error:!1})},a.handlePrev=function(e){e.preventDefault(),1!==a.state.activeStep&&a.setState({activeStep:a.state.activeStep-1})},a.handleSubmit=function(e){e.preventDefault(),a.checkForErrors()&&(document.cookie="".concat(a.state.name,"-").concat(a.state.age,"-").concat(a.state.email),a.showSpinner())},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.stepsArr,n=t.activeStep,c=t.name,s=t.age,l=t.email,o=t.errors;return r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"thankYouPage ".concat(!0===this.state.typ?"":"hidden")},"thanks, your data is saved to cookie.",r.a.createElement("div",{className:"cookie-data"},r.a.createElement("strong",null,"Name:")," ",this.readCookie()[0]," ",r.a.createElement("br",null),r.a.createElement("strong",null,"Age:")," ",this.readCookie()[1]," ",r.a.createElement("br",null),r.a.createElement("strong",null,"Email:")," ",this.readCookie()[2])),r.a.createElement("div",{className:"spinner ".concat(!0===this.state.spinner?"":"hidden")},r.a.createElement("div",{className:"loader"})),r.a.createElement("div",{className:"legend__wrapper"},a.map((function(t,a){return r.a.createElement(v,{activeStep:e.state.activeStep,key:a},t)}))),r.a.createElement("div",{className:"form__input-wrapper"},r.a.createElement(d,{name:"Name",inputType:"text",placeholder:"Your name",className:1===n?"":"hidden",value:c,onInputChange:this.updateState}),r.a.createElement(d,{name:"Age",inputType:"number",placeholder:"Your age",className:2===n?"":"hidden",value:s,onInputChange:this.updateState}),r.a.createElement(d,{name:"Email",inputType:"email",placeholder:"Your email",className:3===n?"":"hidden",value:l,onInputChange:this.updateState}),r.a.createElement("p",{className:"form__error ".concat(!0===this.state.error?"":"hidden")},o[this.state.activeStep-1])),r.a.createElement("div",{className:"wrapper__btn"},r.a.createElement(E,{btnClass:"btn btn__prev",changeInput:this.handlePrev},"Previous"),3===n?r.a.createElement(E,{btnClass:"btn btn__next",changeInput:this.handleSubmit},"Submit"):r.a.createElement(E,{btnClass:"btn btn__next",changeInput:this.handleNext},"Next")))}}]),t}(n.Component),x=function(){return r.a.createElement("div",{className:"theme-switch__wrapper"},r.a.createElement("label",{className:"theme-switch",htmlFor:"checkbox"},r.a.createElement("input",{type:"checkbox",id:"checkbox",onClick:function(e){e.target.checked?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}}),r.a.createElement("div",{className:"slider round"})),r.a.createElement("em",null,"sore eyes?"))};var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(x,null),r.a.createElement("h1",{className:"heading"},"stepper form"),r.a.createElement(f,null)))};s.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.fa4109bd.chunk.js.map