// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import {CardChakra} from "./style"
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { CardHeader, CardBody, CardFooter, Stack as StackChakra, Image, Heading, Text as TextChakra, Button as ButtonChakra, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Scrollbars from "react-custom-scrollbars";


const CardProject = ({imageSrc, imageAlt, titleProject, descriptionProject, linkProject}:any) => {
   const trackStyle = { backgroundColor: '#00adb5', width: 8, right: 0, bottom: 2, top: 2, borderRadius: 4 };

   const renderTrackVertical = () => <div style={trackStyle} className="track-vertical" />;


  return (
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
  )
}

export default CardProject