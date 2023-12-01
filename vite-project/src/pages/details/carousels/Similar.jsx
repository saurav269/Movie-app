import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
    
    //API CALL FOR SIMILAR MOVIE
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar?api_key=68ccd30529adc83eb696447bbbff1338`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;