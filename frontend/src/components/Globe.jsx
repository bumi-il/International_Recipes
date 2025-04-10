import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import globeImage from '../assets/earth-day.jpg';
import { useGlobeContext } from '../context/Context';
import { NavLink } from 'react-router-dom';

const MyGlobe = () => {
    const { globeRef, setRecipe, recipes } = useGlobeContext();

    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        if (globeRef.current) {
            // console.log(globeRef.current.pointOfView());

            globeRef.current.controls().autoRotate = rotate;
        }
    }, [rotate]);

    return (
        <div className='globe'>
            <div className='addRecipeCont'>
                <NavLink
                    to='/new'
                    className='addRecipeBtn'
                >
                    Add Your Recipe
                </NavLink>
            </div>
            <div
                className='globe-rotate'
                onClick={() => {
                    setRotate((prev) => !prev);
                }}
            >
                {rotate ? '⏸️' : '▶️'}
            </div>
            <div
                className='compass'
                onClick={() => {
                    globeRef.current.pointOfView(
                        {
                            lat: 0,
                            lng: 0,
                            altitude: 1.8,
                        },
                        1000
                    );
                }}
            >
                🧭
            </div>
            <Globe
                ref={globeRef}
                onGlobeReady={() => {
                    if (globeRef.current) {
                        globeRef.current.pointOfView(
                            {
                                lat: 0,
                                lng: 0,
                                altitude: 1.8,
                            },
                            1000
                        );
                    }
                }}
                globeImageUrl={
                    globeImage ||
                    '//unpkg.com/three-globe/example/img/earth-day.jpg'
                }
                htmlElementsData={recipes}
                htmlLat={(data) => data.country.lat}
                htmlLng={(data) => data.country.lng}
                htmlElement={(data) => {
                    const cont = document.createElement('div');
                    cont.classList.add('cont');
                    cont.addEventListener('click', () => setRecipe(data));
                    cont.innerHTML = `
                        <img src=${data.mainImage} class="image" />
                        <div style="font-size: 12px; color: white; margin-top: 4px;">
                            ${data.name}
                        </div>
                    `;
                    return cont;
                }}
                customLayerData={[...Array(1000).keys()].map(() => ({
                    lat: (Math.random() - 1) * 360,
                    lng: (Math.random() - 1) * 360,
                    altitude: Math.random() * 2 + 5,
                    size: Math.random() * 1,
                    color: '#ffffff',
                }))}
                customThreeObject={({ size, color }) =>
                    new THREE.Mesh(
                        new THREE.SphereGeometry(size),
                        new THREE.MeshBasicMaterial({ color })
                    )
                }
                customThreeObjectUpdate={(
                    { position },
                    { lat, lng, altitude }
                ) =>
                    Object.assign(
                        position,
                        globeRef.current?.getCoords(lat, lng, altitude)
                    )
                }
            />
        </div>
    );
};

export default MyGlobe;
