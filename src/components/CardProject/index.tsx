

// Components
import {CardChakra} from "./style"
import { CardBody, CardFooter, Stack as StackChakra, Image, Heading, Text as TextChakra, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Scrollbars from "react-custom-scrollbars";


import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

const CardProject = ({imageSrc, imageAlt, titleProject, descriptionProject, linkProject}:any) => {
   const trackStyle = { backgroundColor: '#0F4C75', width: 8, right: 0, bottom: 2, top: 2, borderRadius: 4 };

   const renderTrackVertical = () => <div style={trackStyle} className="track-vertical" />;

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
           // Ative a Animação
           mainControls.start("visible")
        }
    }, [isInView])

  return (
    <motion.div
    style={{
        width: "100%"
    }}
    variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 1, delay: 0.25 }}
    ref={ref}
    >
        <CardChakra 
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        height="12rem"
        width="100%"
        >
            <Image 
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={imageSrc}
            alt={imageAlt}
            />

            <StackChakra
            width="100%"
            >
                <Scrollbars
                style={{ width: '100%', height: '300px' }}
                renderThumbVertical={renderTrackVertical}
                >
                    <CardBody>
                        <Heading size='md'>{titleProject}</Heading>

                        <TextChakra 
                            py='2'
                            textAlign="justify"
                            >
                            {descriptionProject}
                        </TextChakra>
                    </CardBody>

                    <CardFooter>
                        <Link href={linkProject} isExternal>
                                Ver mais <ExternalLinkIcon mx='2px' />
                        </Link>
                    </CardFooter>
                </Scrollbars>
            </StackChakra>
        </CardChakra>
    </motion.div>
  )
}

export default CardProject