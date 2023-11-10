import React from 'react'
import styles from './card.module.scss'
import { CardProps } from './card.type'
import Image from 'next/image'
import { StarRating } from '../star-rating/star-rating'
import { Button } from '../button/button'

export const Card = ({
  image,
  name,
  location,
  stars,
  price,
  passengers,
  date,
  departingLocation
}: CardProps) => {
  return (
    <article className={styles.root}>
      <Image src={image.src} alt={image.alt} width={500} height={280} />
      <div className={styles.inner}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.location}>{location}</p>
        <StarRating count={stars} />
        <p className={styles.guests}>{passengers}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.departingLocation}>{departingLocation}</p>
        <Button subtext="Book Now" text={`£${price}`} />
      </div>
    </article>
  )
}
