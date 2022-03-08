import React from "react";

const Box = ({ position }) => {
    return (
        <mesh position={position}>
            <boxGeometry args={[1, 3, 1]} attach="geometry" />
            <meshStandardMaterial color="#010203" attach="material" />
        </mesh>
    );
};

export default Box;
