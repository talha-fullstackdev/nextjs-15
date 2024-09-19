/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["images.pexels.com"]
    },
    redirects:async () => {
        return [
            // {
            //     source:"/redirect",
            //     destination:"/home",
            //     permanent:false

            // },
            {
                source:"/redirect/:id",
                destination:"/home",
                permanent:false

            },
        ]
        
    }
    
};

export default nextConfig;
