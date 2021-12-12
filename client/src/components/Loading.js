import React from 'react';
import { Spinner } from 'react-bootstrap';
import { DEVICE_SIZES } from 'react-bootstrap/esm/createUtilityClasses';

const Loading = () => {
    return (
        <div>
            <div
            stlye={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%"
            }}
            >
                <Spinner
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    animation="border"
                    variant="primary"
                />
            </div>
        </div>
    )
}

export default Loading
