

import {  Vector3 } from 'three';
import { OrbitControls, Stars, Text3D } from '@react-three/drei';
import { Physics, RapierRigidBody, RigidBody, } from '@react-three/rapier';
import { useRef, useState, useEffect } from 'react';
//import sunImg from '../assets/beautiful-sun-face-moon-phases_100410-432.avif';


// detect collision
const handleCollision = (event: any) => {
   const { other } = event;

   console.log(other.rigidBody.userData.number)


}


const Scene = () => {



  const randomPosition = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let rockRef = useRef<RapierRigidBody>(null);
  let meshRef = useRef<any>(null);

  const [initialPosition, setInitialPosition] = useState(() => {
    return new Vector3(
      randomPosition(-4, 4),
      randomPosition(5, 10),
      randomPosition(-4, 4)
    );
  });

  useEffect(() => {
    const randomInitialPosition = new Vector3(
        randomPosition(-4, 4),
        randomPosition(5, 10),
        randomPosition(-4, 4)
      );
      setInitialPosition(randomInitialPosition);
  }, []);



  

  return (
    <>
      <OrbitControls makeDefault />
      <Stars />
      <Physics>
        <RigidBody
          gravityScale={1}
          restitution={1.2}
          friction={1}
          ref={rockRef}
          position={initialPosition}
          onCollisionEnter={handleCollision}
        >
          <mesh scale={0.4} ref={meshRef}>
            <icosahedronGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>

   
        <RigidBody type="fixed">
          <mesh position={[0, 1.5, -5.25]}>
            <boxGeometry args={[10, 5, 0.5]} />
            <meshStandardMaterial color="transparent" />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position={[0, 1.5, 5.25]}>
            <boxGeometry args={[10, 5, 0.5]} />
            <meshStandardMaterial color="transparent"  />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position={[-5.25, 1.5, 0]}>
            <boxGeometry args={[0.5, 5, 10]} />
            <meshStandardMaterial color="transparent"  />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position={[5.25, 1.5, 0]}>
            <boxGeometry args={[0.5, 5, 10]} />
            <meshStandardMaterial color="transparent" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh receiveShadow position-y={-1.25}>
            <boxGeometry args={[9.9, 0.5, 10]} />
            <meshStandardMaterial  />
          </mesh>
        </RigidBody>
       
        <RigidBody type="fixed" userData={{number: 21}}>
          <mesh receiveShadow position-y={-1}>
            <boxGeometry args={[3, 0.3, 2]} />
            <meshStandardMaterial color = "orange" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  21
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" userData={{number: 4}}>
          <mesh receiveShadow position = {[1.7, -1, -2]} >
            <boxGeometry args={[3.5, 0.3, 2]} />
            <meshStandardMaterial color = "#AF47D2" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  4
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" userData={{number: 17}}>
          <mesh receiveShadow position = {[-1.55, -1, -2]} >
            <boxGeometry args={[3, 0.3, 2]} />
            <meshStandardMaterial color = "#FF4191" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  17
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>


        <RigidBody type="fixed" userData={{number: 18}}>
          <mesh receiveShadow position = {[2.48, -1, 0]} >
            <boxGeometry args={[1.96, 0.3, 2]} />
            <meshStandardMaterial color = "#5B9A8B" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  18
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

        
        <RigidBody type="fixed" userData={{number: 14}}>
          <mesh receiveShadow position = {[4.2, -1, -2]} >
            <boxGeometry args={[1.5, 0.3, 2]} />
            <meshStandardMaterial color = "#19A7CE" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  14
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>


        <RigidBody type="fixed" userData={{number: 2}}>
          <mesh receiveShadow position = {[0.5, -1, -4]} >
            <boxGeometry args={[3, 0.3, 1.9]} />
            <meshStandardMaterial color = "#00ABB3" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  2
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" userData={{number: 6}}>
          <mesh receiveShadow position = {[3.5, -1, -4]} >
            <boxGeometry args={[3, 0.3, 1.9]} />
            <meshStandardMaterial color = "#F806CC" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  6
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>


        <RigidBody type="fixed" userData={{number: 15}}>
          <mesh receiveShadow position = {[4.2, -1, 0.5]} >
            <boxGeometry args={[1.5, 0.3, 3]} />
            <meshStandardMaterial color = "#E04D01" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  15
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>



        <RigidBody type="fixed" userData={{number: 3}}>
          <mesh receiveShadow position = {[-2.93, -1, -4]} >
            <boxGeometry args={[3.85, 0.3, 1.9]} />
            <meshStandardMaterial color = "#F05454" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  3
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>


        <RigidBody type="fixed" userData={{number: 13}}>
          <mesh receiveShadow position = {[-2.76, -1, 0]}>
            <boxGeometry args={[2.5, 0.3, 2]} />
            <meshStandardMaterial color = "#BA135D" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  13
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>


        
        <RigidBody type="fixed" userData={{number: 1}}>
          <mesh receiveShadow position = {[-3.96, -1, -2]} >
            <boxGeometry args={[1.8, 0.3, 2]} />
            <meshStandardMaterial color = "#32E0C4" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  1
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" userData={{number: 16}}>
          <mesh receiveShadow position = {[-1.5, -1, 2]}>
            <boxGeometry args={[2.5, 0.3, 2]} />
            <meshStandardMaterial color = "#FF9595" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  16
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" userData={{number: 7}}>
          <mesh receiveShadow position = {[1.25, -1, 2]}>
            <boxGeometry args={[3, 0.3, 2]} />
            <meshStandardMaterial color = "#7D5E2A" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  7
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" userData={{number: 9}}>
          <mesh receiveShadow position = {[3.13, -1, 2]}>
            <boxGeometry args={[0.64, 0.3, 2]} />
            <meshStandardMaterial color = "black" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  9
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>


        <RigidBody type="fixed" userData={{number: 11}}>
          <mesh receiveShadow position = {[4.2, -1, 3.46]} >
            <boxGeometry args={[1.5, 0.3, 2.93]} />
            <meshStandardMaterial color = "#9DC6A7" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  11
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" userData={{number: 19}}>
          <mesh receiveShadow position = {[1.9, -1, 3.97]}>
            <boxGeometry args={[3, 0.3, 1.9]} />
            <meshStandardMaterial color = "#C738BD" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  19
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" userData={{number: 5}}>
          <mesh receiveShadow position = {[-4.44, -1, 0]}>
            <boxGeometry args={[0.8, 0.3, 2]} />
            <meshStandardMaterial color = "#AF8F6F" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  5
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" userData={{number: 8}}>
          <mesh receiveShadow position = {[-3.8, -1, 2]}>
            <boxGeometry args={[2.05, 0.3, 2]} />
            <meshStandardMaterial color = "#7469B6" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  8
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>


        <RigidBody type="fixed" userData={{number: 10}}>
          <mesh receiveShadow position = {[-3.8, -1, 4]}>
            <boxGeometry args={[2.05, 0.3, 2]} />
            <meshStandardMaterial color = "#EBF400" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  10
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

        
        <RigidBody type="fixed" userData={{number: 12}}>
          <mesh receiveShadow position = {[-0.5, -1, 4]}>
            <boxGeometry args={[1.8, 0.3, 2]} />
            <meshStandardMaterial color = "#15F5BA" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  12
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>


        <RigidBody type="fixed" userData={{number: 20}}>
          <mesh receiveShadow position = {[-2.10, -1, 4]}>
            <boxGeometry args={[1.3, 0.3, 2]} />
            <meshStandardMaterial color = "#40A2E3" />
     
             <Text3D font = "./helvetiker_regular.typeface.json"
              size={ 0.75 }
              height={ 0.2 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.02 }
              bevelOffset={ 0 }
              bevelSegments={ 5 } position={[-0.5, 0.2, 0]}>
                  20
                  <meshStandardMaterial color="white" />
             </Text3D>
           
          </mesh>
        </RigidBody>

      </Physics>
    </>
  );
};

export default Scene;
