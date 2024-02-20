export const getServerSideProps = (context) => {
    // add header
    context.res.setHeader("Content-Security-Policy", "default-src 'self'");

    return {
        props: {},
    };
}
export default function CSP() {
    return <div>You are in CSP page</div>
}
