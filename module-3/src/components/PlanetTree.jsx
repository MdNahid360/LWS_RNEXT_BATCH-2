/* eslint-disable react/prop-types */

// const PlanetTree = ({ planet }) => {
//     const childPlaces = planet?.childPlaces;
//     return (
//         <li>
//             <h3>{planet?.title}</h3>

//             {
//                 childPlaces?.length > 0 && (
//                     <ol>
//                         {
//                             childPlaces?.map(planet => <PlanetTree key={planet?.id} planet={planet} />)
//                         }
//                     </ol>
//                 )
//             }
//         </li>
//     )
// }

// export default PlanetTree


/********************************
 * step-2
 ********************************/
const PlanetTree = ({ id, placesById, onComplete, parentId }) => {
    const place = placesById[id];
    const childIds = place?.childIds;
    return (
        <li>
            <p>{place?.title}</p>
            <button onClick={() => {
                onComplete(parentId, id)
            }}
            >Complete</button>
            {
                childIds?.length > 0 && (
                    <ol>
                        {
                            childIds?.map(childId => <PlanetTree
                                key={childId}
                                id={childId}
                                placesById={placesById}
                                onComplete={onComplete}
                                parentId={id}
                            />)
                        }
                    </ol>
                )
            }
        </li>
    )
}

export default PlanetTree
