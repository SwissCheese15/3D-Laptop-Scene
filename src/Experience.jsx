import { Text, ContactShadows, PresentationControls, Float, Environment } from '@react-three/drei'
import Laptop from './laptop'

export default function Experience()
{
    return <>

        {/* Cube Map Helper */}
        <Environment preset='city'/>

        {/* Background */}
        <color args={ [ "#252a3a" ] } attach="background" />

        {/* Controlls */}
        <PresentationControls
            global
            rotation={[ 0.13, 0.1, 0 ]}
            polar={[ -0.4, 0.2 ]}
            azimuth={[ -1.0, 0.75 ]}
            config={{ mass: 2, tension: 200 }}
            snap={{ mass: 4, tension: 400 }}
        >
            {/* Allow Model to slightly hover */}
            <Float rotationIntensity={ 0.5 }>
                {/* Screen Light */}
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 70 }
                    color={ "grey" }
                    rotation={[ 0.1, Math.PI, 0 ]}
                    position={[ 0, 0.55, -1.15 ]}
                    />
                    {/* GLTFJSX Model */}
                <Laptop position-y={ -1.2 } />

                {/* Floating Text */}
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={ 0.6 }
                    position={ [ 2, 0.8, 0.75 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 2 }
                    textAlign={ "center" }
                >
                        Page Design
                </Text>
            </Float>
        </PresentationControls>

        {/* Shadow beneath Model */}
        <ContactShadows
            position-y={ -1.4 }
            scale={ 5 }
            opacity={ 0.4 }
            blur= { 2.4 }
        />
    </>
}