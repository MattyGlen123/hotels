import React from 'react'
import styles from './card.module.scss'
import { CardProps } from './card.type'
import Image from 'next/legacy/image'
import { StarRating } from '../star-rating/star-rating'
import { Button } from '../button/button'
import { Accordion } from '../accordion/accordion'
import { formatPassengers } from './util'

export const Card = ({
  image,
  name,
  location,
  stars,
  price,
  passengers,
  date,
  duration,
  departingLocation,
  overview,
  initallyExpanded,
  cardIndex
}: CardProps) => {
  return (
    <article className={styles.root}>
      <div className={styles['image-wrap']}>
        <Image
          priority={true}
          className={styles.image}
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.location}>{location}</p>
        <StarRating count={stars} />
        <p data-testid="passengers" className={styles.guests}>
          {formatPassengers(passengers)}
        </p>
        <p className={styles.date}>
          <strong>{date}</strong> for{' '}
          <strong>{duration > 1 ? `${duration} days` : `1 day`}</strong>
        </p>
        <p className={styles.departingLocation}>
          departing from <strong>{departingLocation}</strong>
        </p>
        <Button subtext="Book Now" text={`£${price}`} />
      </div>

      <Accordion
        openText={
          <>
            <strong>Read More</strong> about this hotel
          </>
        }
        closeText={
          <>
            <strong>Read Less</strong> about this hotel
          </>
        }
        body={overview}
        initallyExpanded={initallyExpanded}
        additionalClassName={styles.overview}
        id={cardIndex}
      />
    </article>
  )
}
