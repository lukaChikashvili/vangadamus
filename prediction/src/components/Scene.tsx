

const Scene = () => {
  return (
    <>
       <mesh receiveShadow position-y={ - 1.25 }>
            <boxGeometry args={ [ 10, 0.5, 10 ] } />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
  )
}

export default Scene
