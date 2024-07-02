import {  useFrame, useLoader } from '@react-three/fiber'
import circle from '../assets/100-removebg-preview.png'
import {  TextureLoader } from 'three'
import { OrbitControls } from '@react-three/drei';
import { Physics, RapierRigidBody, RigidBody, vec3 } from '@react-three/rapier';
import { useEffect, useRef } from 'react';


const Scene = () => {

 

     const texture = useLoader(TextureLoader, circle);

    const randomPosition = (min: number, max: number) => {
           return Math.floor(Math.random() * (max - min) + min);

    }
 let rockRef = useRef<RapierRigidBody>(null);


 useFrame(() => {
    if(rockRef.current) {
        const position = vec3(rockRef.current.translation());
        console.log(position)
    }
 })

  return (
    <>
    <OrbitControls makeDefault />
     <Physics debug>
        <RigidBody gravityScale={1}
                    restitution={1}
                    friction={1.2}
                    ref={rockRef}
                    ccd = {true} >
       <mesh position={[
              randomPosition(-4, 4),
              randomPosition(5, 10),
              randomPosition(-4, 4)
         ]} scale={0.5}   >
          <icosahedronGeometry  />
          <meshStandardMaterial color = "red" />
       </mesh>
       </RigidBody>


       <RigidBody type="fixed">
          <mesh position={[0, 2.5, -5.25]}>
            <boxGeometry args={[10, 5, 0.5]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position={[0, 2.5, 5.25]}>
            <boxGeometry args={[10, 5, 0.5]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position={[-5.25, 2.5, 0]}>
            <boxGeometry args={[0.5, 5, 10]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position={[5.25, 2.5, 0]}>
            <boxGeometry args={[0.5, 5, 10]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </RigidBody>

     <RigidBody type='fixed'>
       <mesh receiveShadow position-y={ - 1.25 }>
            <boxGeometry args={ [ 10, 0.5, 10 ] } />
            <meshStandardMaterial  map = {texture} />
        </mesh>
        </RigidBody>
        </Physics>
    </>
  )
}

export default Scene
