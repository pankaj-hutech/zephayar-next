const template = {
    component: "Template",
    childrens: [
        {
            component: "Header",
            src:
                "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "text"
        },
        {
            component: "body",
            childrens: [
                {
                    component: "card",
                    data: [],
                    childrens: []
                },
                {
                    component: "subtitle",
                    children: "This is the subtitle"
                },
                {
                    component: "text",
                    children:
                        "Some quick example text to build on the card title and make up the bulk of the card's content."
                },
                {
                    component: "button",
                    children: "Click Me!"
                }

            ]
        }, {
            component: "footer",
            text: "footer"
        }
    ]
};