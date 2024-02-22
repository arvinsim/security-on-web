import axios from "axios";
import useSWR from "swr";

export const getServerSideProps = (context) => {
    // add header
    context.res.setHeader("Content-Security-Policy", "default-src 'self'; object-src: 'none'; report-uri: http://localhost:3000/api/csp-collect;  report-to http://localhost:3000/api/csp-collect;");

    return {
        props: {},
    };
}
export default function CSP() {
    // const { data, error, isLoading } = useSWR('https://anime-facts-rest-api.herokuapp.com/api/v1', async (url) => {
    //     return axios.get(url).then(res => res.data)
    // })
    const isLoading = false
    const error = false

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error in CSP page</div>
    }

    // console.log('data', data)

    return <div>You are in CSP page</div>
}
