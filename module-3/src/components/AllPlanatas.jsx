/* eslint-disable no-unused-vars */
import { useState } from "react"
// import { initialTravelPlan } from "../../public/data"
import { initialTravelPlan } from "../../public/data2"
import PlanetTree from "./PlanetTree";

const AllPlanatas = () => {
    const [planetas, setPlanetas] = useState(initialTravelPlan);


    const handleComplete = (parentId, childId) => {
        const parent = planetas[parentId];

        const nextParent = {
            ...parent,
            childIds: parent?.childIds?.filter(id => id !== childId)
        }

        setPlanetas({
            ...planetas,
            [parentId]: nextParent
        })
    }


    const root = planetas[0];
    const planetIds = root?.childIds;

    // const allPlanets = planetas?.childPlaces;

    console.log(root)
    return (
        <>
            {/* step-1 */}
            {/* <ol>
                {
                    allPlanets?.map(planet => (
                        <PlanetTree key={planet?.id} planet={planet} />
                    ))}
            </ol> */}

            {/* step-2 */}


            <ol>
                {
                    planetIds?.map(id => (
                        <PlanetTree
                            key={id}
                            id={id}
                            placesById={planetas}
                            onComplete={handleComplete}
                            parentId={0}
                        />
                    ))}
            </ol>
        </>
    )
}

export default AllPlanatas
