import { CloseIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/layout'
import React from 'react'

const UserBadgeItem = ({ user, handleFunction }) => {
    return (
        <div>
            <Box
                px={2}
                py={1}
                borderRadius="lg"
                m={1}
                mb={2}
                variant="solid"
                fontSize={12}
                backgroundColor="#8da4f1"
                color="white"
                cursor="pointer"
                onClick={handleFunction}
            >

                {user.name}
                <CloseIcon pl={1} />

            </Box>

        </div>
    )
}

export default UserBadgeItem