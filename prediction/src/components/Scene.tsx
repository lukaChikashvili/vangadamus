import {  useFrame, useLoader } from '@react-three/fiber'
import circle from '../assets/100-removebg-preview.png'
import {  TextureLoader } from 'three'
import {  OrbitControls,  Stars } from '@react-three/drei';
import { Physics, RapierRigidBody, RigidBody, vec3 } from '@react-three/rapier';
import {  useRef } from 'react';
import sunImg from '../assets/beautiful-sun-face-moon-phases_100410-432.avif'




const Scene = () => {

    
     const texture = useLoader(TextureLoader, circle);
     const sun = useLoader(TextureLoader, sunImg)

    const randomPosition = (min: number, max: number) => {
           return Math.floor(Math.random() * (max - min) + min);

    }


 let rockRef = useRef<RapierRigidBody>(null);
 let meshRef = useRef<any>(null);


 useFrame(() => {
    if(rockRef.current) {
        const position = vec3(rockRef.current.translation());

        console.log(position)
    }
 })

  return (
    <>
    <OrbitControls makeDefault />
    <Stars />
     <Physics >
        <RigidBody gravityScale={1}
                    restitution={1}
                    friction={2}
                    ref={rockRef}
                    
                     >
       <mesh  position={[
           randomPosition(-4, 4),
           randomPosition(5, 10),
           randomPosition(-4, 4)
       ]} scale={0.4}  ref={meshRef}  >
          <icosahedronGeometry  />
          <meshStandardMaterial color = "red"  />
       </mesh>
       </RigidBody>


       <RigidBody type="fixed">
          <mesh position={[0, 1.5, -5.25]}>
            <boxGeometry args={[10, 5, 0.5]} />
            <meshStandardMaterial color="transparent" map = {sun} />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position={[0, 1.5, 5.25]}>
            <boxGeometry args={[10, 5, 0.5]} />
            <meshStandardMaterial color="transparent" map = {sun}/>
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position={[-5.25, 1.5, 0]}>
            <boxGeometry args={[0.5, 5, 10]} />
            <meshStandardMaterial color="transparent" map = {sun}/>
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position={[5.25, 1.5, 0]}>
            <boxGeometry args={[0.5, 5, 10]} />
            <meshStandardMaterial color="transparent" map = {sun} />
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
