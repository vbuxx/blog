import { Link } from "@inertiajs/inertia-react";

const Pagination = ({ meta }) => {
    const prev = meta.links[0].url;
    const current = meta.current_page;
    const next = meta.links[meta.links.length - 1].url;

    return (
        <div className="btn-group py-4">
            {prev && <Link href={prev} className="btn btn-outline">«</Link>}
            <Link className="btn btn-outline"> {current}</Link>
            {next && <Link href={next} className="btn btn-outline">»</Link>}
        </div>
    );
};

export default Pagination;