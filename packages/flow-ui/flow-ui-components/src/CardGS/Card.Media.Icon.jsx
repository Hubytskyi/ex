import React from 'react'
import { Flex, Box } from 'theme-ui'
import MemphisPattern from '@components/MemphisPattern'
import Image from '../../../../../site/src/components/Image/index';

const styles = {
  iconBox: {
    height: `full`
  },
  iconAndText: {
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    // color: `omegaDark`,
    position: `relative`,
    fontWeight: `medium`,
    height: `full`,
    zIndex: 2,
    px: 2,
    lineHeight: 1.33,
    svg: {
      pb: 2
    }
  },
  pattern: {
    opacity: 0.07,
    borderRadius: `default`
  }
}

const CardMediaIcon = ({ icon }) => (
    <Box>
      <Flex sx={styles.iconAndText}>
        <Image/>
      </Flex>
      <MemphisPattern sx={styles.pattern} />
    </Box>
)

export default CardMediaIcon
