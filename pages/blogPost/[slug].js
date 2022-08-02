import React from 'react'
import { useRouter } from 'next/router'
const slug = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const { slug } = router.query;
  return (
    <div>
      <h1>Page Title: {slug}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio accusantium iusto illo perferendis animi possimus eaque. Amet eos dolores ratione accusamus ad tempora quae eveniet, quaerat corporis, alias nemo repellendus cum. Aperiam fuga dolor minima! Tempore incidunt totam nemo eius fuga. Possimus ipsum autem voluptatem aut dolorem saepe, voluptates voluptatum in sequi maiores, nesciunt aspernatur earum repellat tempora itaque reiciendis facilis aliquid alias, cumque recusandae minus. Ipsam ut tenetur, ipsum maxime sed inventore iste omnis eveniet atque aperiam. Voluptatum a autem excepturi, beatae dolore blanditiis explicabo. Fuga iste inventore ut recusandae laboriosam rem beatae, exercitationem, vero magnam mollitia iure!</p>
    </div>
  )
}

export default slug