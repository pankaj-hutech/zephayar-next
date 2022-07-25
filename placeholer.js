import P1 from "./public/images/pexels-ben-mack-5708069.jpg"
import P2 from "./public/images/pexels-enric-cruz-lópez-6039245.jpg"
import P3 from "./public/images/pexels-joseph-costa-1462935.jpg"
import P4 from "./public/images/pexels-julia-m-cameron-4145190.jpg"


export const placeHolder = [
    {
        id: 1,
        componentName: "header",
        componentDisplayName: "header",
        data: {
            title: "Hutech solutions",
            subTitle: "company",
            logoName: "Zaphayar",
            description: "Service Provider",
            bgColor: "#4b1584",
            textColor: "#FFF",
            buttons: [
                {
                    title: "LogIn",
                    link: "/login",
                    type: "button",
                    color: "primary",
                    variant: "contained",
                    sm: 6,
                    xs: 2,
                    sx: {
                        mx: 1,
                    }
                },
                {
                    title: "SignUp",
                    link: "/signup",
                    variant:"contained",
                    type: "button",
                    color: "secondary",
                    sm: 6,
                    xs: 2,
                    sx: {
                        mx : 1
                    }
                },
            ],
            logo: {
                image: {
                    smallUrl: "",
                    largeUrl: "",
                    metafields: {},
                    alt:"logo",
                },
            },
            headerNameItem: [
                {
                    title: "Solutions",
                    link: "/",
                    nestItem: [
                        {
                            title : "Digital Marketing",
                            link : "/",
                            nestItem : []
                        },
                         {
                            title : "D2C Brand",
                            link : "/",
                            nestItem : []
                        },
                        {
                            title : "Mobile Commerce",
                            link : "/",
                            nestItem : []
                        },
                        {
                            title : "Advanced E-commerce",
                            link : "/",
                            nestItem : []
                        }
                    ]
                },
                {
                    title: "Company",
                    link: "/",
                    nestItem: [
                        {
                            title : "Support",
                            link : "/",
                            nestItem : []
                        },
                         {
                            title : "Blog",
                            link : "/",
                            nestItem : []
                        },
                        {
                            title : "About",
                            link : "/",
                            nestItem : []
                        },
                        {
                            title : "Help Center",
                            link : "/",
                            nestItem : []
                        }
                    ]
                },
                {
                    title: "Career",
                    link: "/",
                    nestItem: [
                        
                    ]
                },
            ] 
        },
    },
    {
        id: 1,
        componentName: "slider",
        componentDisplayName: "slider",
        data: [
            {
                id: 1,
                image: P1,
                title: "Any Text33" ,
                subTitle : "image-1",
            },
            {
                id: 2,
                image: P2,
                title: "Any Text22" ,
                subTitle : "image-1",
            },
            {
                id: 3,
                image: P3,
                title: "Any Text2" ,
                subTitle : "image-1",
            },
            {
                id: 4,
                image: P1,
                title: "Any Text2" ,
                subTitle : "image-1",
            },
            {
                id: 5,
                image: P4,
                title: "Any Text 1" ,
                subTitle : "image-1",
            }
        ]
    },
    {
        id: 3,
        componentName: "signup",
        componentDisplayName: "signup",
        link: "signup",
        // user can select email password or confirm password these are the options
        fields: [
            {
                id:1,
                name: "firstName",
                placeholder: "Enter first name",
                label: "First Name", 
                variant: "outlined",
                fullWidth: true,
                required: true,
                xs: 12,
                sm: 6,
            },
            {
                id:2,
                name: "email",
                placeholder: "Enter your email",
                label: "email", 
                variant: "outlined",
                fullWidth: true,
                required: true,
                xs: 12,
                sm: 6,
            },
        ],
         buttons: [
            {
                title: "signUp",
                type: "submit",
                color: "primary",
                variant: "contained",
                sm: 6,
                xs: 2,
                sx: {
                    mx : 1
                }
            },
        ],
    }
    
];

