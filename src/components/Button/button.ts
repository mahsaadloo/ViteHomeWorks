import { Box } from "../../lib/Box/Box"
export const firstButton = () => {
    return Box({element: "div", children:[
                Box({element: "button", children: "Submit", attr: {className: "w-full text-gray-600 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}}),
                Box({element: "button", children: "Add to List", attr: {className: "w-full text-gray-600 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}}),
                Box({element: "button", children: "Show List", attr: {className: "w-full text-gray-600 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}})
    ], attr: {className: "px-5"}}) 
}