import {Box, Heading, Button, HStack, Stack, Image, Link, Text} from '@chakra-ui/react'
import greekSalad from "./Assets/greek-salad.jpg"
import bruschetta from './Assets/bruchetta.jpg'
import lemonDessert from './Assets/lemon-dessert.jpg'

function Highlights() {
    return(
        <Box width='100%' display='flex' flexDirection='column' flex='wrap' alignItems='center' gap='50px' id='menu-section'>

            <HStack spacing='390px'>
                <Heading as='h1' size='lg' fontFamily='karla' color='black' mt='50px'>This Week's Specials!</Heading>
                <Button mt='50px' size='md' borderRadius='12px' bg='#F4CE14' _hover={{ color: '#495E57' }}>Order Online</Button>
            </HStack>

            <HStack spacing='20px' mb='30px'>
                <Box display='flex' boxShadow='md' borderTopLeftRadius='10px' borderTopRightRadius='10px' width='250px' height='380px' bg='#EDEFEE' flexDirection='column'>
                    <Image src={greekSalad} alt='Greek Salad' borderTopRightRadius='10px' borderTopLeftRadius='10px'></Image>
                    <Stack m='10px'>
                        <HStack mt='10px' spacing='70px'>
                            <Heading size='md' color='#black' fontFamily='karla' >Greek Salad</Heading>
                            <Heading size='sm' color='#EE9972'>$12.99</Heading>
                        </HStack>
                        <Text mt='20px' fontSize='xs' fontWeight='medium' color='#495E57'>The famous greek salad with crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Text>
                        <HStack spacing='10px' mt='20px'>
                            <Link  fontSize='16px' color='#333333' fontWeight='bold' fontFamily='karla'>Order a Delivery</Link>
                            <i class="fa fa-motorcycle"></i>
                        </HStack>
                    </Stack>
                </Box>

                <Box boxShadow='md' borderTopRightRadius='10px' borderTopLeftRadius='10px' width='250px' height='380px' bg='#EDEFEE' display='flex' flexDirection='column'>
                    <Image src={bruschetta} alt='Bruschetta' borderTopRightRadius='10px' borderTopLeftRadius='10px'></Image>
                    <Stack m='10px'>
                        <HStack mt='10px' spacing='90px'>
                            <Heading size='md' color='#black' fontFamily='karla' >Bruschetta</Heading>
                            <Heading size='sm' color='#EE9972'>$5.99</Heading>
                        </HStack>
                        <Text mt='20px' fontSize='xs' fontWeight='medium' color='#495E57'>Our Bruschetta is made from grilled bread that has been smeared wirh garlic and seasoned with salt and olive oil.</Text>
                        <HStack spacing='10px' mt='39px' >
                            <Link fontSize='16px' color='#333333' fontWeight='bold' fontFamily='karla'>Order a Delivery</Link>
                            <i class="fa fa-motorcycle"></i>
                        </HStack>
                    </Stack>
                </Box>

                <Box boxShadow='md'  borderTopRightRadius='10px' borderTopLeftRadius='10px' width='250px' height='380px' bg='#EDEFEE' display='flex' flexDirection='column'>
                    <Image src={lemonDessert} alt='Lemon Dessert' height='167px' borderTopRightRadius='10px' borderTopLeftRadius='10px'></Image>
                    <Stack m='10px'>
                        <HStack mt='10px' spacing='55px'>
                            <Heading size='md' color='#black' fontFamily='karla'>Lemon Dessert</Heading>
                            <Heading size='sm' color='#EE9972'>$5.00</Heading>
                        </HStack>
                        <Text mt='20px' fontSize='xs' fontWeight='medium' color='#495E57'>This comes straight from Grandma's recipe book, every single ingredient has been sourced and is as authentic as can be imagined.</Text>
                        <HStack spacing='10px' mt='20px'>
                            <Link fontSize='16px' color='#333333' fontWeight='bold' fontFamily='karla'>Order a Delivery</Link>
                            <i class="fa fa-motorcycle"></i>
                        </HStack>
                    </Stack>
                </Box>
            </HStack>

        </Box>
    )
}

export default Highlights