import { Box } from "../../lib/Box/Box";

type textFieldProps = {
    label?: HTMLElement | string,
    helperText?: HTMLElement | string,
    Icon?: string,
    name?: string
};

export const textfield = (props:textFieldProps = {label:'',name: ''}) => {
    const {helperText, label, Icon, name, ...restProps} = props;
    return Box({element: "div", children: [
                Box({element: "h1", children: "Contact Form", attr: {className: "flex justify-center pt-5 text-xl font-black bg-gradient-to-l from-rose-500 to-yellow-200 bg-clip-text text-transparent"}}), 
                Box({element: "form", children: 
                    Box({element: "div", attr: {className: "relative z-0 w-full mb-6 group p-5"},
                        children: [
                            Box({element: "div", attr: {className: "relative flex items-center justify-center w-20 h-20 overflow-hidden bg-rose-200 rounded-full dark:bg-rose-600 my-5 mx-auto"}, 
                                children: Box({element: "span", children: "JK", attr: {className: "font-medium text-gray-600 dark:text-gray-300"}})}),
                            Box({element: "p", children: "Contact Name", attr: {className: "text-sm text-pink-600"}}),
                            Box({element: "input", attr: {className: "mb-10 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-300 focus:outline-none focus:ring-0 focus:border-pink-300 peer", ...restProps}}),
                            Box({element: "p", children: "Phone Number", attr: {className: "text-sm text-pink-600"}}),
                            Box({element: "input", attr: {className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-300 focus:outline-none focus:ring-0 focus:border-pink-300 peer", ...restProps}}),
                            Box({element: "div", attr: {className: "flex items-center mt-8 mx-auto"}, children: [
                                Box({element: "div", attr: {className: "flex items-center mx-auto"}, children: [
                                    Box({element: "input", attr: {name: "default-radio", className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}}),
                                    Box({element: "span", children: "Device", attr: {className: "ml-2 text-sm font-medium text-pink-600 dark:text-gray-300"}})
                                ] }),
                                Box({element: "div", attr: {className: "flex items-center mx-auto"}, children: [
                                    Box({element: "input", attr: {name: "default-radio", className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}}),
                                    Box({element: "span", children: "SIM", attr: {className: "ml-2 text-sm font-medium text-pink-600 dark:text-gray-300"}})
                                ] })
                            ]})
                        ]
                    })
                })
            ]})
};