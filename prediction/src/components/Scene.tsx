import { useLoader } from '@react-three/fiber'
import circle from '../assets/100-removebg-preview.png'
import {  TextureLoader } from 'three'
import { OrbitControls } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';

const Scene = () => {

     const texture = useLoader(TextureLoader, circle);

    const randomPosition = (min: number, max: number) => {
           return Math.floor(Math.random() * (max - min) + min);

    }

  return (
    <>
    <OrbitControls makeDefault />
     <Physics>
        <RigidBody gravityScale={1}
                    restitution={1}
                    friction={1.2}>
       <mesh position={[
              randomPosition(-4, 4),
              randomPosition(4, 10),
              randomPosition(-4, 4)
         ]} scale={0.5}>
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
       <mesh receiveShadow position-y={ - 1.25 } >
            <boxGeometry args={ [ 10, 0.5, 10 ] } />
            <meshStandardMaterial  map = {texture} />
        </mesh>
        </RigidBody>
        </Physics>
    </>
  )
}

export default Scene
