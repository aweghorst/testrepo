(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{109:function(e,a,t){},114:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);var n,r,s,l,o,i,c,m,u,d,b,p,g,f=t(0),v=t.n(f),h=t(48),E=t.n(h),y=(t(93),t(15)),x=t(82),w=t(129),k=t(132),N=t(128),j=t(81),O=t(22),S=t(12),_=(t(94),function(){return v.a.createElement("div",{className:"home-container"},v.a.createElement("div",null,v.a.createElement("h2",{className:"welcome-title"},"Welcome to Find My Bike!")),v.a.createElement("div",null,v.a.createElement("p",{className:"welcome-text"},"Find My Bike is designed to quickly reunite a rider and their missing bicycle. With this app, you are able to upload your bicycle information at any time and in the event the bike becomes lost or stolen, you can update your bike's status as missing and your bike will be automatically added to our search page allowing other users in your area to keep an eye out for your missing bicycle. ")))}),$=t(13),C=t.n($),B=t(20),L=t(36),I=t(10),T=t(134),D=t(130),F=t(136),A=t(17),M=t(131),U=Object(M.a)(n||(n=Object(A.a)(["\n    mutation login($username: String!, $password: String!) {\n        login(username: $username, password: $password) {\n            token\n            user {\n                _id\n            }\n        }\n    }\n"]))),W=Object(M.a)(r||(r=Object(A.a)(["\n    mutation addUser($username: String!, $email: String!, $password: String!) {\n        addUser(username: $username, email: $email, password: $password) {\n            token\n            user {\n                _id\n            }\n        }\n    }\n"]))),P=(Object(M.a)(s||(s=Object(A.a)(["\n    mutation updateUser($email: String!, $password: String!) {\n        updateUser(email: $email, password: $password) {\n            _id\n            username\n            email\n        }\n    }\n"]))),Object(M.a)(l||(l=Object(A.a)(["\n    mutation addBike(\n        $brand: String\n        $bike_model: String\n        $year: String\n        $serial: String\n        $description: String\n        $image: String\n    ) {\n        addBike(\n            brand: $brand\n            bike_model: $bike_model\n            year: $year\n            serial: $serial\n            description: $description\n            image: $image\n        ) {\n            _id\n            brand\n            bike_model\n            year\n            serial\n            description\n            image\n            status {\n                isLost\n                location\n                date\n            }\n        }\n    }\n"])))),q=(Object(M.a)(o||(o=Object(A.a)(["\n    mutation updateBike($bikeId: ID!, $description: String, $image: String) {\n        updateBike(bikeId: $bikeId, description: $description, image: $image) {\n            _id\n            brand\n            bike_model\n            year\n            serial\n            description\n            image\n            status {\n                isLost\n                location\n                date\n            }\n        }\n    }\n"]))),Object(M.a)(i||(i=Object(A.a)(["\n    mutation deleteBike($bikeId: ID!) {\n        deleteBike(bikeId: $bikeId) {\n            _id\n            bikeCount\n            bikes {\n                _id\n                brand\n                bike_model\n                year\n                serial\n                description\n                image\n                status {\n                    isLost\n                    location\n                    date\n                }\n                messages {\n                    username\n                    messageBody\n                    createdAt\n                }\n            }\n        }\n    }\n"])))),R=Object(M.a)(c||(c=Object(A.a)(["\n    mutation updateStatus($bikeId: ID!, $isLost: Boolean, $location: String) {\n        updateStatus(bikeId: $bikeId, isLost: $isLost, location: $location) {\n            _id\n            brand\n            bike_model\n            serial\n            description\n            image\n            status {\n                isLost\n                location\n                date\n            }\n        }\n    }\n"]))),z=Object(M.a)(m||(m=Object(A.a)(["\n    mutation addMessage($bikeId: ID!, $messageBody: String!) {\n        addComment(bikeId: $bikeId, messageBody: $messageBody) {\n            _id\n            brand\n            bike_model\n            description\n            status {\n                isLost\n                location\n                date\n            }\n            messages {\n                _id\n                messageBody\n                createdAt\n                username\n            }\n        }\n    }\n"]))),K=t(73),Y=t.n(K),G=function(){var e=Object(f.useState)(!1),a=Object(I.a)(e,2),t=a[0],n=a[1],r=Object(f.useRef)(null),s=Object(f.useState)({brand:"",bike_model:"",year:"",serial:"",description:"",image:""}),l=Object(I.a)(s,2),o=l[0],i=l[1],c=Object(f.useState)({location:"",isLost:""}),m=Object(I.a)(c,2),u=m[0],d=m[1],b=Object(F.a)(P),p=Object(I.a)(b,1)[0],g=Object(F.a)(R),h=Object(I.a)(g,1)[0],E=function(e){var a=e.target,t=a.name,n=a.value;i(Object(y.a)(Object(y.a)({},o),{},Object(L.a)({},t,n)))},x=function(e){var a;a="Not missing"!==document.querySelector('[name="status"]').value;var t=document.querySelector("#location").value;d({isLost:a,location:t})},w=function(){var e=Object(B.a)(C.a.mark((function e(a){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(u),e.prev=2,e.next=5,p({variables:Object(y.a)({},o)});case 5:t=e.sent,n=t.data,k(null===n||void 0===n?void 0:n.addBike._id,u.isLost,u.location),i({brand:"",bike_model:"",year:"",serial:"",description:"",image:""}),d({location:"",isLost:""}),console.log("form from addBike:",n),window.location.reload(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0),window.location.reload(),window.alert("There was an error with adding your bike. Please make sure bike image is not larger than 64 KB.");case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(a){return e.apply(this,arguments)}}();function k(e,a,t){return N.apply(this,arguments)}function N(){return(N=Object(B.a)(C.a.mark((function e(a,t,n){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h({variables:{bikeId:a,isLost:t,location:n}});case 3:r=e.sent,console.log("status Data",r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return v.a.createElement(v.a.Fragment,null,v.a.createElement("button",{className:"rounded-md border border-transparent addbikebtn shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return n((function(e){return!e}))}},"Add a Bike"),v.a.createElement(T.a.Root,{show:t,as:f.Fragment},v.a.createElement(D.a,{as:"div","auto-reopen":"true",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:r,onClose:n},v.a.createElement("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},v.a.createElement(T.a.Child,{as:f.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},v.a.createElement(D.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})),v.a.createElement("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200b"),v.a.createElement(T.a.Child,{as:f.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},v.a.createElement("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},v.a.createElement("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},v.a.createElement("div",{className:"sm:flex sm:items-start"},v.a.createElement("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"},v.a.createElement("span",{role:"img","aria-label":"bike Emoji"},"\ud83d\udeb4")),v.a.createElement("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},v.a.createElement(D.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900"},"Add a Bike"),v.a.createElement("div",{className:"mt-2"},v.a.createElement("p",{className:"text-sm text-gray-500"},"The more information you can provide about your bike, the easier it will be for law enforcement and other users to try to identify it if it is ever lost or stolen!"))))),v.a.createElement("div",{className:"mt-5 md:mt-0 md:col-span-2"},v.a.createElement("form",{action:"#",method:"POST",onSubmit:w},v.a.createElement("div",{className:"shadow overflow-hidden sm:rounded-md"},v.a.createElement("div",{className:"px-4 py-5 bg-white sm:p-6"},v.a.createElement("div",{className:"col-span-6 sm:col-span-3"},v.a.createElement("label",{htmlFor:"status",className:"block text-sm font-medium text-gray-700"},"Bike's current status"),v.a.createElement("select",{id:"status",name:"status",onChange:x,className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},v.a.createElement("option",null,"Not missing"),v.a.createElement("option",null,"Missing"))),v.a.createElement("div",{className:"grid grid-cols-6 gap-6"},v.a.createElement("div",{className:"col-span-6 sm:col-span-3"},v.a.createElement("label",{htmlFor:"brand",className:"block text-sm font-medium text-gray-700"},"Brand"),v.a.createElement("input",{type:"text",name:"brand",id:"brand",value:o.brand,onChange:E,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),v.a.createElement("div",{className:"col-span-6 sm:col-span-3"},v.a.createElement("label",{htmlFor:"model",className:"block text-sm font-medium text-gray-700"},"Model"),v.a.createElement("input",{type:"text",name:"bike_model",id:"bike_model",value:o.bike_model,onChange:E,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),v.a.createElement("div",{className:"col-span-6 sm:col-span-3"},v.a.createElement("label",{htmlFor:"year",className:"block text-sm font-medium text-gray-700"},"Year"),v.a.createElement("input",{type:"text",name:"year",id:"year",value:o.year,onChange:E,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),v.a.createElement("div",{className:"col-span-6 sm:col-span-3"},v.a.createElement("label",{htmlFor:"serial",className:"block text-sm font-medium text-gray-700"},"Serial Number"),v.a.createElement("input",{type:"text",name:"serial",id:"serial",value:o.serial,onChange:E,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),v.a.createElement("div",{className:"col-span-6 sm:col-span-6 lg:col-span-2"},v.a.createElement("label",{htmlFor:"city",className:"block text-sm font-medium text-gray-700"},"City"),v.a.createElement("input",{type:"text",name:"location",id:"location",value:u.location,onChange:x,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),v.a.createElement("div",{className:"col-span-6"},v.a.createElement("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700"},"Description"),v.a.createElement("input",{type:"text",name:"description",id:"description",value:o.description,onChange:E,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),v.a.createElement("br",null)),v.a.createElement("p",null,"Image size cannot be larger than 64 KB."),v.a.createElement("div",null,v.a.createElement(Y.a,{multiple:!1,onDone:function(e){var a=e.base64;return i(Object(y.a)(Object(y.a)({},o),{},{image:a}))}}))),v.a.createElement("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6"})),v.a.createElement("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},v.a.createElement("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return n(!1)}},"Add bike"),v.a.createElement("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return n(!1)},ref:r},"Cancel"))))))))))},H=t(54),J=t.n(H),Q=(t(71),t(109),function(e){var a=e.bikeMessages,t=!1;return 0===(null===a||void 0===a?void 0:a.length)&&(t=!0),v.a.createElement("div",{className:"flex-col p-20 pt-0 mt-10"},v.a.createElement("div",{className:"justify-center"},v.a.createElement("h1",{className:"flex m-full mt-10 w-full justify-center comments-header"},"Comments"),v.a.createElement("div",{className:"bg-gray-200  content-between mx-auto p-6 m-2 mb-10 rounded-3xl itemcontainer comment shadow-md w-8/12"},v.a.createElement("div",{className:"flex-col justify-center mx-auto justify-items-center text-center"},a&&a.map((function(e){return v.a.createElement("div",{className:"bg-gray-200 p-6 m-2 rounded-3xl pt-0 my-7 itemboxcomment shadow-md m-auto w-auto"},v.a.createElement("div",{className:"flex justify-between mb-5"},v.a.createElement("div",{className:"message-username"},e.username),v.a.createElement("div",null,e.createdAt)),v.a.createElement("div",{className:"bg-gray-50 p-6 m-2 rounded-3xl mx-auto shadow-md w-full",key:e._id},v.a.createElement("div",null,e.messageBody)))})),t&&v.a.createElement("div",{className:"bg-gray-200 p-6 pt-6 m-2 rounded-3xl pt-0  itemboxcomment my-3 shadow-md m-auto w-auto"},v.a.createElement("div",{className:"bg-gray-50 p-6 m-2 rounded-3xl mx-auto shadow-md w-full"},"There Are No Messages Yet! Don't Give Up Hope!"))))))}),V=t(133),X=(Object(M.a)(u||(u=Object(A.a)(["\n    {\n        users {\n            username\n            password\n            email\n            bikeCount\n            bikes {\n                _id\n                brand\n                bike_model\n                year\n                serial\n                description\n                image\n                status {\n                    isLost\n                    location\n                    date\n                }\n                messages {\n                    _id\n                    username\n                    messageBody\n                    createdAt\n                }\n            }\n        }\n    }\n"]))),Object(M.a)(d||(d=Object(A.a)(["\n    {\n        user {\n            username\n            email\n            bikeCount\n            bikes {\n                _id\n                userId\n                brand\n                bike_model\n                year\n                serial\n                description\n                image\n                status {\n                    isLost\n                    location\n                    date\n                }\n                messages {\n                    _id\n                    username\n                    messageBody\n                    createdAt\n                }\n            }\n        }\n    }\n"])))),Z=(Object(M.a)(b||(b=Object(A.a)(["\n    {\n        bikes {\n            _id\n            brand\n            bike_model\n            year\n            serial\n            description\n            image\n            status {\n                isLost\n                location\n                date\n            }\n            messages {\n                _id\n                username\n                messageBody\n                createdAt\n            }\n        }\n    }\n"]))),Object(M.a)(p||(p=Object(A.a)(["\n{\n    userBikes {\n        _id\n        brand\n        bike_model\n        year\n        serial\n        description\n        image\n        status {\n            isLost\n            location\n            date\n        }\n        messages {\n            _id\n            username\n            messageBody\n            createdAt\n        }\n    }\n}\n"]))),Object(M.a)(g||(g=Object(A.a)(["\n    {\n        lostBikes{\n            _id\n            brand\n            bike_model\n            year\n            serial\n            description\n            image\n            status {\n                isLost\n                location\n                date\n            }\n        }\n    }\n"])))),ee=function(){var e=Object(V.a)(X),a=(e.loading,e.data);console.log(null===a||void 0===a?void 0:a.user);null===a||void 0===a||a.user.username,null===a||void 0===a||a.user.email,null===a||void 0===a||a.user.bikeCount;var t=null===a||void 0===a?void 0:a.user.bikes,n=Object(f.useState)(),r=Object(I.a)(n,2),s=r[0],l=r[1],o=Object(f.useState)(!1),i=Object(I.a)(o,2),c=(i[0],i[1],Object(f.useState)(t)),m=Object(I.a)(c,2),u=(m[0],m[1]);Object(f.useEffect)((function(){u(t)}),t);var d=Object(F.a)(q),b=Object(I.a)(d,2),p=b[0];b[1].error;function g(e){e.preventDefault();var a=e.target.getAttribute("data-bike-id");console.log("clicked message!",a);var n=null===t||void 0===t?void 0:t.filter((function(e){return e._id===a}))[0].messages;console.log("one bike",n),l(n),console.log("mesages",n)}function h(e){e.preventDefault(),console.log("clicked edit!");e.target.getAttribute("data-bike-id")}var E=function(){var e=Object(B.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("clicked delete!"),console.log("This is the bikeID: "+a),e.prev=2,e.next=5,p({variables:{bikeId:a}});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:window.location.reload();case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(a){return e.apply(this,arguments)}}();return v.a.createElement("span",{className:""},v.a.createElement(J.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},infinite:!1,swipeable:!0,removeArrowOnDeviceType:["tablet","mobile"],className:"flex justify-center p-20",centerMode:!0},null===t||void 0===t?void 0:t.map((function(e){return v.a.createElement("div",{className:"bg-gray-300 p-6 m-2 rounded-3xl shadow-2xl max-w-lg",key:e._id},v.a.createElement("div",{className:""},v.a.createElement("img",{className:"object-contain h-48 w-full p-1",src:e.image,alt:"your bike"}),v.a.createElement("div",{className:"bg-gray-200 rounded-3xl p-2"},e.status[0].isLost?v.a.createElement("div",{className:"pt-2 pb-2 bg-red-200 rounded-full"},"Missing"):v.a.createElement("div",{className:"pt-2 pb-2 bg-green-200 rounded-full"},"Found"),v.a.createElement("div",null,v.a.createElement("ul",null,v.a.createElement("li",null,"Brand: ",e.brand),v.a.createElement("li",null,"Model: ",e.bike_model),v.a.createElement("li",null,"Location: ",e.status[0].location)),v.a.createElement("p",{className:"pt-3 pb-3"},"Description: ",e.description)),v.a.createElement("div",{className:"flex justify-around"},v.a.createElement("button",{"data-bike-id":e._id,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:h},"Edit"),v.a.createElement("button",{"data-bike-id":e._id,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:g},"Messages"),v.a.createElement("button",{"data-bike-id":e._id,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:function(){return E(e._id)}},"Delete")))))})),v.a.createElement("div",null)),v.a.createElement("div",null,v.a.createElement(Q,{bikeMessages:s})))},ae=function(){return v.a.createElement("div",{className:"w-screen"},v.a.createElement(G,null),v.a.createElement(ee,null))},te=function(e){var a=Object(f.useState)(""),t=Object(I.a)(a,2),n=t[0],r=t[1],s=Object(F.a)(z),l=Object(I.a)(s,2),o=l[0];l[1].error;function i(){return(i=Object(B.a)(C.a.mark((function a(t){return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,o({variables:{bikeId:e,messageBody:n}});case 4:r(""),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),console.error(a.t0);case 10:case"end":return a.stop()}}),a,null,[[1,7]])})))).apply(this,arguments)}return v.a.createElement("div",{className:"flex justify-center p-20"},v.a.createElement("div",{className:"w-full max-w-xs"},v.a.createElement("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:function(e){return i.apply(this,arguments)}},v.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"comment"},"Let user know what you know!"),v.a.createElement("textarea",{className:"border rounded-md outline",rows:"8",cols:"30",placeholder:"type your message here!",onChange:function(e){r(e.target.value)}}),v.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"},"Submit"))))},ne=function(){return v.a.createElement("div",null,v.a.createElement(te,null))},re=function(){var e=Object(V.a)(Z),a=e.loading,t=e.data;console.log("This is your log of the useQuery of QUERY_ALL_BIKES: ",t);var n=a?[]:t.lostBikes;console.log("These are your lost bikes: ",n);var r=Object(f.useState)([]),s=Object(I.a)(r,2),l=s[0],o=(s[1],Object(f.useState)("")),i=Object(I.a)(o,2),c=i[0],m=i[1],u=function(){var e=Object(B.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),console.log(a),c){e.next=4;break}return e.abrupt("return",!1);case 4:n.filter((function(e){e.status[0].location===c&&console.log("you have locations!")}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return v.a.createElement("span",{className:"justify-center"},v.a.createElement("form",{className:"bg-white shadow p-4 flex",onSubmit:u},v.a.createElement("span",{className:"w-auto flex justify-end items-center text-gray-500 p-2"},v.a.createElement("p",{className:"material-icons text-3xl"},"search")),v.a.createElement("input",{className:"w-full rounded p-2",type:"text",placeholder:"Try 'Los Angeles'",name:"searchInput",value:c,onChange:function(e){return m(e.target.value)}}),v.a.createElement("button",{className:"bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4"},v.a.createElement("p",{className:"font-semibold text-xs"},"Search"))),v.a.createElement(J.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},infinite:!1,swipeable:!0,removeArrowOnDeviceType:["tablet","mobile"],className:"flex justify-center p-20",centerMode:!0},v.a.createElement("div",null,l.map((function(e){return v.a.createElement("div",{key:e._id},e.image?v.a.createElement("img",{className:"object-contain h-48 w-full p-1",src:e.image,alt:"the users bike"}):null,v.a.createElement("div",{className:"bg-gray-200 rounded-3xl p-2"},v.a.createElement("h4",{className:"pt-2 pb-2 bg-red-200 rounded-full"},e.status),v.a.createElement("div",null,v.a.createElement("p",{lassName:"pt-3 pb-3"},e.description)),v.a.createElement(O.a,null,v.a.createElement("div",{className:"flex justify-around"},v.a.createElement(O.b,{exact:!0,to:"/Message",activeClassName:"current-nav",className:"nav-link",replace:!0},v.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"},"Message User")),v.a.createElement(S.c,null,v.a.createElement(S.a,{exact:!0,path:"/Message",component:ne}))))))})))))},se=function(){return v.a.createElement("div",{className:""},v.a.createElement(re,null))},le=t(78),oe=t.n(le),ie=(t(114),function(){return v.a.createElement("div",{className:"p-20"},v.a.createElement("div",{className:"flex justify-around"},v.a.createElement("img",{width:"50%",className:"imgborder",src:oe.a,alt:"simple graphic of a locked up bike"}),v.a.createElement("div",{className:"ml-10"},v.a.createElement("div",{className:"p-1 text-center"},v.a.createElement("h2",null,"Tips and Tricks!")),v.a.createElement("div",{className:"pt-1"},v.a.createElement("dl",{className:"list-disc text-left"},v.a.createElement("div",{className:"tip"},"Add your information early before your bike goes missing!"),v.a.createElement("li",null,"Serial Numbers are hard to remember and it's one of the most important factors in determining bike ownership."),v.a.createElement("div",{className:"tip"},"Be thorough with your descriptions!"),v.a.createElement("li",null,"Listing things like the custom hardware as well as any unique identifying features such as scratches or scuffs will help prove the bike is yours!"),v.a.createElement("div",{className:"tip"},"Be on the look-out for other missing bikes!"),v.a.createElement("li",null,"An active community will help lower the number of missing bikes in your area!"))))))}),ce=t(79),me=t(80),ue=t(64),de=t.n(ue),be=new(function(){function e(){Object(ce.a)(this,e)}return Object(me.a)(e,[{key:"getProfile",value:function(){return de()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return de()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/Dashbord")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),pe=function(){var e=Object(f.useState)({username:"",email:"",password:""}),a=Object(I.a)(e,2),t=a[0],n=a[1],r=Object(F.a)(W),s=Object(I.a)(r,1)[0],l=function(e){var a=e.target,r=a.name,s=a.value;n(Object(y.a)(Object(y.a)({},t),{},Object(L.a)({},r,s)))},o=function(){var e=Object(B.a)(C.a.mark((function e(a){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,s({variables:Object(y.a)({},t)});case 4:n=e.sent,r=n.data,be.login(r.addUser.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return v.a.createElement("div",{className:""},v.a.createElement("div",{className:"flex p-20 justify-center"},v.a.createElement("div",{className:"w-full max-w-xs"},v.a.createElement("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:o},v.a.createElement("div",{className:"mb-4"},v.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username"},"Username"),v.a.createElement("input",{className:"focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",name:"username",type:"text",placeholder:"Username",value:t.username,onChange:l})),v.a.createElement("div",{className:"mb-4"},v.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email"},"Email"),v.a.createElement("input",{className:"focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"email",name:"email",type:"text",placeholder:"Email",value:t.email,onChange:l})),v.a.createElement("div",{className:"mb-6"},v.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password"},"Password"),v.a.createElement("input",{className:"focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",name:"password",type:"password",placeholder:"***********",value:t.password,onChange:l}),v.a.createElement("p",{className:"text-red-500 text-xs italic"},"Please choose a password.")),v.a.createElement("div",{className:"flex items-center justify-between"},v.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus: shadow-outline",type:"submit"},"Sign Up"))))))},ge=function(e){var a=Object(f.useState)({username:"",password:""}),t=Object(I.a)(a,2),n=t[0],r=t[1],s=Object(F.a)(U),l=Object(I.a)(s,2),o=l[0],i=l[1].error,c=function(e){var a=e.target,t=a.name,s=a.value;r(Object(y.a)(Object(y.a)({},n),{},Object(L.a)({},t,s)))},m=function(){var e=Object(B.a)(C.a.mark((function e(a){var t,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,o({variables:Object(y.a)({},n)});case 4:t=e.sent,s=t.data,be.login(s.login.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:r({username:"",password:""});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return v.a.createElement("div",{className:"flex p-20 justify-center"},v.a.createElement("div",{className:"w-full max-w-xs"},v.a.createElement("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:m},v.a.createElement("div",{className:"mb-4"},v.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username"},"Username"),v.a.createElement("input",{className:"focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",name:"username",type:"username",placeholder:"Username",value:n.username,onChange:c})),v.a.createElement("div",{className:"mb-6"},v.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password"},"Password"),v.a.createElement("input",{className:"focus:outline-none focus:ring focus:border-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",name:"password",type:"password",placeholder:"*********",value:n.password,onChange:c})),v.a.createElement("div",{className:"flex items-center justify-between"},v.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus: shadow-outline",type:"submit"},"Login"))),i&&v.a.createElement("div",null,"Login failed"),v.a.createElement(O.a,null,v.a.createElement("div",{className:"flex justify-center"},v.a.createElement("p",{className:"pt-2 pr-6"},"Not a member?"),v.a.createElement(O.b,{exact:!0,to:"/Signup",activeClassName:"current-nav",className:"nav-link",replace:!0},v.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"},"Sign Up")),v.a.createElement(S.c,null,v.a.createElement(S.a,{path:"/Signup",component:pe}))))))},fe=function(){return v.a.createElement("div",{className:""},v.a.createElement(ge,null))},ve=function(){return v.a.createElement("div",null,v.a.createElement(pe,null))},he=function(){return v.a.createElement("div",null,"Oops, we couldn't find that page.")},Ee=(t(117),function(){return v.a.createElement(O.a,null,v.a.createElement("div",null,v.a.createElement("nav",{className:"nav-section"},v.a.createElement("ul",null,v.a.createElement("li",{className:"main-nav"},v.a.createElement(O.b,{exact:!0,to:"/",activeClassName:"current-nav",className:"nav-link",replace:!0},"Home")),v.a.createElement("li",{className:"main-nav"},v.a.createElement(O.b,{exact:!0,to:"/Dashboard",activeClassName:"current-nav",className:"nav-link",replace:!0},"Dashboard")),v.a.createElement("li",{className:"main-nav"},v.a.createElement(O.b,{exact:!0,to:"/Search",activeClassName:"current-nav",className:"nav-link",replace:!0},"Search")),v.a.createElement("li",{className:"main-nav"},v.a.createElement(O.b,{exact:!0,to:"/Tips",activeClassName:"current-nav",className:"nav-link",replace:!0},"Tips")),be.loggedIn()?v.a.createElement(v.a.Fragment,null,v.a.createElement("li",{className:"login-out nav-link",onClick:be.logout},"Logout")):v.a.createElement("li",{id:"login-out"},v.a.createElement(O.b,{exact:!0,to:"/Login",activeClassName:"current-nav",className:"nav-link",replace:!0},"Login"))))),v.a.createElement("div",{className:"object-center"},v.a.createElement(S.c,null,v.a.createElement(S.a,{exact:!0,path:"/",component:_}),v.a.createElement(S.a,{path:"/Dashboard",component:ae}),v.a.createElement(S.a,{path:"/Search",component:se}),v.a.createElement(S.a,{path:"/Tips",component:ie}),v.a.createElement(S.a,{path:"/Login",component:fe}),v.a.createElement(S.a,{path:"/Signup",component:ve}),v.a.createElement(S.a,{path:"/Message",component:ne}),v.a.createElement(S.a,{component:he}))))}),ye=(t(118),function(){return v.a.createElement("div",null,v.a.createElement("header",null,v.a.createElement("div",{className:"justify-center test"},v.a.createElement("h1",{className:"brand-title"},"Find My Bike"),v.a.createElement("div",{className:"nav-section"},v.a.createElement(Ee,null)))))}),xe=(t(119),function(){return v.a.createElement("div",{className:"footer-section"},v.a.createElement("footer",{className:"footer-text"},"\xa9 2021 by UTA Coding Bootcamp Group 1"))}),we=Object(x.a)({uri:"/graphql"}),ke=Object(j.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(y.a)(Object(y.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),Ne=new w.a({link:ke.concat(we),cache:new k.a});var je=function(){return v.a.createElement(N.a,{client:Ne},v.a.createElement(ye,null),v.a.createElement(xe,null))},Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}E.a.render(v.a.createElement(v.a.StrictMode,null,v.a.createElement(je,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");Oe?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Se(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Se(a,e)}))}}()},78:function(e,a,t){e.exports=t.p+"static/media/biketips.e41a5155.jpg"},88:function(e,a,t){e.exports=t(120)},93:function(e,a,t){},94:function(e,a,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.deaf085e.chunk.js.map