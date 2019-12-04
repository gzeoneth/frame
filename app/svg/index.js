import React from 'react'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'

module.exports = {
  logo: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 153.42 152.94'>
          <path fill='currentColor' d='M145.15,75.59v-58a9.29,9.29,0,0,0-9.3-9.28H77.65a2.24,2.24,0,0,1-1.56-.64l-7-7A2.24,2.24,0,0,0,67.48,0H9.31A9.29,9.29,0,0,0,0,9.27H0v58a2.16,2.16,0,0,0,.65,1.55l7,7a2.16,2.16,0,0,1,.65,1.55v58a9.29,9.29,0,0,0,9.3,9.28H75.8a2.24,2.24,0,0,1,1.56.64l7,7a2.24,2.24,0,0,0,1.56.64h58.19a9.29,9.29,0,0,0,9.31-9.27h0v-58a2.16,2.16,0,0,0-.65-1.55l-7-7A2.17,2.17,0,0,1,145.15,75.59Zm-39.8,30.69H48.18A1.32,1.32,0,0,1,46.87,105V48a1.35,1.35,0,0,1,1.31-1.33h57.17A1.34,1.34,0,0,1,106.68,48v57a1.33,1.33,0,0,1-1.33,1.32Z' transform='translate(0 0)' />
        </svg>
      </div>
    )
  },
  send: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 512 512'>
          <path fill='currentColor' d='M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z' />
        </svg>
      </div>
    )
  },
  sign: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 640 512'>
          <path fill='currentColor' d='M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5-29.1 13.1-54.2 24.4-76.1 24.4-22.6 0-26-16.2-21.3-51.9 1.1-8 11.7-79.2-42.7-76.1-25.1 1.5-64.3 24.8-169.5 126L192 182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5 138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2 32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4 42.2-42.2 154.7-150.7 211.2-195.8-2.2 28.5-2.1 58.9 20.6 83.8 15.3 16.8 37.3 25.3 65.5 25.3 35.6 0 68-14.6 102.3-30 33-14.8 99-62.6 138.4-65.8 8.5-.7 15.2-7.3 15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2z' />
        </svg>
      </div>
    )
  },
  include: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 512 512'>
          <path fill='currentColor' d='M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z' />
        </svg>
      </div>
    )
  },
  longArrow: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 448 512'>
          <path fill='currentColor' d='M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z' />
        </svg>
      </div>
    )
  },
  txSection: size => {
    return (
      <div style={{ width: '410px', height: '50px' }}>
        <svg viewBox='0 0 445.47 54.55'>
          <path class='a' d='M328.82,353.55H762.58a3.85,3.85,0,0,1,3.57,2.41l6.47,16.18a23.36,23.36,0,0,1,0,17.36l-6.47,16.18a3.86,3.86,0,0,1-3.57,2.41H328.82Z' transform='translate(-328.82 -353.55)' />
        </svg>
      </div>
    )
  },
  seedling: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 512 512'>
          <path fill='currentColor' d='M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z' />
        </svg>
      </div>
    )
  },
  hex: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 245 245'>
          <path fill='currentColor' d='M99.5 5.2583302491977a39 39 0 0 1 39 0l69.253175473055 39.983339501605a39 39 0 0 1 19.5 33.774990747593l0 79.966679003209a39 39 0 0 1 -19.5 33.774990747593l-69.253175473055 39.983339501605a39 39 0 0 1 -39 0l-69.253175473055 -39.983339501605a39 39 0 0 1 -19.5 -33.774990747593l1.2735971654952e-13 -79.966679003209a39 39 0 0 1 19.5 -33.774990747593' />
        </svg>
      </div>
    )
  },
  swoop: size => {
    return (
      <div style={{ width: '120%', height: '1200px' }}>
        <svg viewBox='0 0 121.89 524.31'>
          <path fill='currentColor' d='M75.82,460C56.2,465.69,13.16,478.35.5,522.65V.5H121.39V411.09C121.39,449.87,97.11,453.81,75.82,460Z' />
        </svg>
      </div>
    )
  },
  lightbulb: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 352 512'>
          <path fill='currentColor' d='M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z' />
        </svg>
      </div>
    )
  },
  flame: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px', paddingBottom: '2px' }}>
        <svg viewBox='0 0 384 512'>
          <path fill='currentColor' d='M192 0C79.7 101.3 0 220.9 0 300.5 0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5zm0 448c-56.5 0-96-39-96-94.8 0-13.5 4.6-61.5 96-161.2 91.4 99.7 96 147.7 96 161.2 0 55.8-39.5 94.8-96 94.8z' />
        </svg>
      </div>
    )
  },
  quote: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px', paddingTop: '1px' }}>
        <svg viewBox='0 0 512 512'>
          <path fill='currentColor' d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z' />
        </svg>
      </div>
    )
  },
  ring: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px', paddingTop: '3px' }}>
        <svg viewBox='0 0 512 512'>
          <path fill='currentColor' d='M256 64C110.06 64 0 125.91 0 208v98.13C0 384.48 114.62 448 256 448s256-63.52 256-141.87V208c0-82.09-110.06-144-256-144zm0 64c106.04 0 192 35.82 192 80 0 9.26-3.97 18.12-10.91 26.39C392.15 208.21 328.23 192 256 192s-136.15 16.21-181.09 42.39C67.97 226.12 64 217.26 64 208c0-44.18 85.96-80 192-80zM120.43 264.64C155.04 249.93 201.64 240 256 240s100.96 9.93 135.57 24.64C356.84 279.07 308.93 288 256 288s-100.84-8.93-135.57-23.36z' />
        </svg>
      </div>
    )
  },
  fingerprint: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px', paddingBottom: '2px' }}>
        <svg viewBox='0 0 512 512'>
          <path fill='currentColor' d='M256.12 245.96c-13.25 0-24 10.74-24 24 1.14 72.25-8.14 141.9-27.7 211.55-2.73 9.72 2.15 30.49 23.12 30.49 10.48 0 20.11-6.92 23.09-17.52 13.53-47.91 31.04-125.41 29.48-224.52.01-13.25-10.73-24-23.99-24zm-.86-81.73C194 164.16 151.25 211.3 152.1 265.32c.75 47.94-3.75 95.91-13.37 142.55-2.69 12.98 5.67 25.69 18.64 28.36 13.05 2.67 25.67-5.66 28.36-18.64 10.34-50.09 15.17-101.58 14.37-153.02-.41-25.95 19.92-52.49 54.45-52.34 31.31.47 57.15 25.34 57.62 55.47.77 48.05-2.81 96.33-10.61 143.55-2.17 13.06 6.69 25.42 19.76 27.58 19.97 3.33 26.81-15.1 27.58-19.77 8.28-50.03 12.06-101.21 11.27-152.11-.88-55.8-47.94-101.88-104.91-102.72zm-110.69-19.78c-10.3-8.34-25.37-6.8-33.76 3.48-25.62 31.5-39.39 71.28-38.75 112 .59 37.58-2.47 75.27-9.11 112.05-2.34 13.05 6.31 25.53 19.36 27.89 20.11 3.5 27.07-14.81 27.89-19.36 7.19-39.84 10.5-80.66 9.86-121.33-.47-29.88 9.2-57.88 28-80.97 8.35-10.28 6.79-25.39-3.49-33.76zm109.47-62.33c-15.41-.41-30.87 1.44-45.78 4.97-12.89 3.06-20.87 15.98-17.83 28.89 3.06 12.89 16 20.83 28.89 17.83 11.05-2.61 22.47-3.77 34-3.69 75.43 1.13 137.73 61.5 138.88 134.58.59 37.88-1.28 76.11-5.58 113.63-1.5 13.17 7.95 25.08 21.11 26.58 16.72 1.95 25.51-11.88 26.58-21.11a929.06 929.06 0 0 0 5.89-119.85c-1.56-98.75-85.07-180.33-186.16-181.83zm252.07 121.45c-2.86-12.92-15.51-21.2-28.61-18.27-12.94 2.86-21.12 15.66-18.26 28.61 4.71 21.41 4.91 37.41 4.7 61.6-.11 13.27 10.55 24.09 23.8 24.2h.2c13.17 0 23.89-10.61 24-23.8.18-22.18.4-44.11-5.83-72.34zm-40.12-90.72C417.29 43.46 337.6 1.29 252.81.02 183.02-.82 118.47 24.91 70.46 72.94 24.09 119.37-.9 181.04.14 246.65l-.12 21.47c-.39 13.25 10.03 24.31 23.28 24.69.23.02.48.02.72.02 12.92 0 23.59-10.3 23.97-23.3l.16-23.64c-.83-52.5 19.16-101.86 56.28-139 38.76-38.8 91.34-59.67 147.68-58.86 69.45 1.03 134.73 35.56 174.62 92.39 7.61 10.86 22.56 13.45 33.42 5.86 10.84-7.62 13.46-22.59 5.84-33.43z' />
        </svg>
      </div>
    )
  },
  trezor: size => {
    return (
      <div style={{ width: size + 'px', height: (size + 2) + 'px' }}>
        <svg viewBox='0 0 522.5 800'>
          <path fill='currentColor' d='M249 0C149.9 0 69.7 80.2 69.7 179.3v67.2C34.9 252.8 0 261.2 0 272.1v350.7s0 9.7 10.9 14.3c39.5 16 194.9 71 230.6 83.6 4.6 1.7 5.9 1.7 7.1 1.7 1.7 0 2.5 0 7.1-1.7 35.7-12.6 191.5-67.6 231-83.6 10.1-4.2 10.5-13.9 10.5-13.9V272.1c0-10.9-34.4-19.7-69.3-25.6v-67.2C428.4 80.2 347.7 0 249 0zm0 85.7c58.4 0 93.7 35.3 93.7 93.7v58.4c-65.5-4.6-121.4-4.6-187.3 0v-58.4c0-58.5 35.3-93.7 93.6-93.7zm-.4 238.1c81.5 0 149.9 6.3 149.9 17.6v218.8c0 3.4-.4 3.8-3.4 5-2.9 1.3-139 50.4-139 50.4s-5.5 1.7-7.1 1.7c-1.7 0-7.1-2.1-7.1-2.1s-136.1-49.1-139-50.4-3.4-1.7-3.4-5V341c-.8-11.3 67.6-17.2 149.1-17.2z' />
        </svg>
      </div>
    )
  },
  ledger: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px', padding: '3px 1px 0px 0px' }}>
        <svg viewBox='0 0 400 400'>
          <path fill='currentColor' d='M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z' />
        </svg>
      </div>
    )
  },
  aragon: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 48 95'>
          <path fill='currentColor' opacity='0.15' d='M5.30013 26.8635L5.77363 28.7535C5.77363 28.7535 11.364 40.2931 23.9499 44.5801C23.9499 44.5801 35.4004 39.6631 40.4867 31.3195L33.4658 25.1579C33.4658 25.1579 30.1054 27.8469 25.1108 27.8469C20.1161 27.8469 13.3344 24.8506 13.3344 18.6736C13.3344 12.4966 20.3605 10.2378 20.3605 10.2378L17.3668 9.50027H9.71437L4.85718 21.2704L5.30013 26.8635Z' />
          <path fill='currentColor' d='M47.5944 13.8916C47.3805 13.6765 42.9828 8 25.748 1C24.8743 0.657513 24.0568 0.948486 24.0568 0.948486C8.26624 4.99919 0.519287 13.3594 0.519287 13.8916C0.519287 14.4238 2.77987 22.4228 4.24619 25.6803C4.36839 25.9569 6.32348 29.4295 7.77453 31.3195C6.91918 29.4295 5.98745 27.7854 5.98745 24.9581C5.98745 16.9834 12.1277 10.499 19.8106 10.2225C19.9939 10.2225 20.1925 10.2225 20.3758 10.2378L18.5428 8.39394C18.5428 8.39394 25.9203 7.14932 35.3903 12.9114C35.3903 12.9114 35.5278 13.2034 35.3903 14.0639C35.3903 14.0639 39.8504 15.9999 40.2322 19.7645C40.6141 23.5291 38.2466 25.6803 36.3373 25.9876C36.3373 25.9876 37.3301 24.4357 35.8027 23.606C35.4819 23.4216 35.1001 23.3447 34.7182 23.3601C31.8009 23.3601 31.4648 26.7098 31.4648 26.7098C31.4343 26.8788 31.4343 27.0479 31.4343 27.2169C31.4343 27.2169 30.9455 32.1185 39.6213 32.0263C39.6213 32.0263 44.0202 27.0171 45.1811 22.515C45.6087 20.8555 45.9142 19.6109 46.1128 18.6889C46.6016 17.3829 47.0751 15.4589 47.5333 14.0606L47.5944 13.8916Z' />
          <path fill='currentColor' d='M31.6177 14.4019C31.7399 14.3405 32.137 14.1407 32.5953 13.6644C33.5117 13.7873 34.4129 14.0792 34.4129 14.0792C32.748 13.0651 30.4721 12.4658 27.9519 12.4812C27.9519 12.4812 28.9142 13.8641 31.5872 14.4326C31.5872 14.4326 31.6024 14.4173 31.6177 14.4019Z' />
        </svg>
      </div>
    )
  },
  trash: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 448 512'>
          <path fill='currentColor' d='M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z' />
        </svg>
      </div>
    )
  },
  apps: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 512 512'>
          <path fill='currentColor' d='M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z' />
        </svg>
      </div>
    )
  },
  thumbtack: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 384 512'>
          <path fill='currentColor' d='M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z' />
        </svg>
      </div>
    )
  },
  twitter: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 400 400'>
          <path fill='currentColor' d='M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.24,102.24,0,0,1-29.46,8.07,51.46,51.46,0,0,0,22.55-28.37,102.76,102.76,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.63,145.63,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.84,50.84,0,0,1,85,169.86v.65a51.31,51.31,0,0,0,41.15,50.28,51.2,51.2,0,0,1-23.16.88,51.36,51.36,0,0,0,47.92,35.62A102.9,102.9,0,0,1,75,278.55a145.22,145.22,0,0,0,78.62,23' />
        </svg>
      </div>
    )
  },
  chrome: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 496 512'>
          <path fill='currentColor' d='M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z' />
        </svg>
      </div>
    )
  },
  firefox: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 480 512'>
          <path fill='currentColor' d='M478.1 235.3c-.7-4.5-1.4-7.1-1.4-7.1s-1.8 2-4.7 5.9c-.9-10.7-2.8-21.2-5.8-31.6-3.7-12.9-8.5-25.4-14.5-37.4-3.8-8-8.2-15.6-13.3-22.8-1.8-2.7-3.7-5.4-5.6-7.9-8.8-14.4-19-23.3-30.7-40-7.6-12.8-12.9-26.9-15.4-41.6-3.2 8.9-5.7 18-7.4 27.3-12.1-12.2-22.5-20.8-28.9-26.7C319.4 24.2 323 9.1 323 9.1S264.7 74.2 289.9 142c8.7 23 23.8 43.1 43.4 57.9 24.4 20.2 50.8 36 64.7 76.6-11.2-21.3-28.1-39.2-48.8-51.5 6.2 14.7 9.4 30.6 9.3 46.5 0 61-49.6 110.5-110.6 110.4-8.3 0-16.5-.9-24.5-2.8-9.5-1.8-18.7-4.9-27.4-9.3-12.9-7.8-24-18.1-32.8-30.3l-.2-.3 2 .7c4.6 1.6 9.2 2.8 14 3.7 18.7 4 38.3 1.7 55.6-6.6 17.5-9.7 28-16.9 36.6-14h.2c8.4 2.7 15-5.5 9-14-10.4-13.4-27.4-20-44.2-17-17.5 2.5-33.5 15-56.4 2.9-1.5-.8-2.9-1.6-4.3-2.5-1.6-.9 4.9 1.3 3.4.3-5-2.5-9.8-5.4-14.4-8.6-.3-.3 3.5 1.1 3.1.8-5.9-4-11-9.2-15-15.2-4.1-7.4-4.5-16.4-1-24.1 2.1-3.8 5.4-6.9 9.3-8.7 3 1.5 4.8 2.6 4.8 2.6s-1.3-2.5-2.1-3.8c.3-.1.5 0 .8-.2 2.6 1.1 8.3 4 11.4 5.8 2.1 1.1 3.8 2.7 5.2 4.7 0 0 1-.5.3-2.7-1.1-2.7-2.9-5-5.4-6.6h.2c2.3 1.2 4.5 2.6 6.6 4.1 1.9-4.4 2.8-9.2 2.6-14 .2-2.6-.2-5.3-1.1-7.8-.8-1.6.5-2.2 1.9-.5-.2-1.3-.7-2.5-1.2-3.7v-.1s.8-1.1 1.2-1.5c1-1 2.1-1.9 3.4-2.7 7.2-4.5 14.8-8.4 22.7-11.6 6.4-2.8 11.7-4.9 12.8-5.6 1.6-1 3.1-2.2 4.5-3.5 5.3-4.5 9-10.8 10.2-17.7.1-.9.2-1.8.3-2.8v-1.5c-.9-3.5-6.9-6.1-38.4-9.1-11.1-1.8-20-10.1-22.5-21.1v.1c-.4 1.1-.9 2.3-1.3 3.5.4-1.2.8-2.3 1.3-3.5v-.2c6-15.7 16.8-29.1 30.8-38.3.8-.7-3.2.2-2.4-.5 2.7-1.3 5.4-2.5 8.2-3.5 1.4-.6-6-3.4-12.6-2.7-4 .2-8 1.2-11.7 2.8 1.6-1.3 6.2-3.1 5.1-3.1-8.4 1.6-16.5 4.7-23.9 9 0-.8.1-1.5.5-2.2-5.9 2.5-11 6.5-15 11.5.1-.9.2-1.8.2-2.7-2.7 2-5.2 4.3-7.3 6.9l-.1.1c-17.4-6.7-36.3-8.3-54.6-4.7l-.2-.1h.2c-3.8-3.1-7.1-6.7-9.7-10.9l-.2.1-.4-.2c-1.2-1.8-2.4-3.8-3.7-6-.9-1.6-1.8-3.4-2.7-5.2 0-.1-.1-.2-.2-.2-.4 0-.6 1.7-.9 1.3v-.1c-3.2-8.3-4.7-17.2-4.4-26.2l-.2.1c-5.1 3.5-9 8.6-11.1 14.5-.9 2.1-1.6 3.3-2.2 4.5v-.5c.1-1.1.6-3.3.5-3.1-.1.2-.2.3-.3.4-1.5 1.7-2.9 3.7-3.9 5.8-.9 1.9-1.7 3.9-2.3 5.9-.1.3 0-.3 0-1s.1-2 0-1.7l-.3.7c-6.7 14.9-10.9 30.8-12.4 47.1-.4 2.8-.6 5.6-.5 8.3v.2c-4.8 5.2-9 11-12.7 17.1-12.1 20.4-21.1 42.5-26.8 65.6 4-8.8 8.8-17.2 14.3-25.1C5.5 228.5 0 257.4 0 286.6c1.8-8.6 4.2-17 7-25.3-1.7 34.5 4.9 68.9 19.4 100.3 19.4 43.5 51.6 80 92.3 104.7 16.6 11.2 34.7 19.9 53.8 25.8 2.5.9 5.1 1.8 7.7 2.7-.8-.3-1.6-.7-2.4-1 22.6 6.8 46.2 10.3 69.8 10.3 83.7 0 111.3-31.9 113.8-35 4.1-3.7 7.5-8.2 9.9-13.3 1.6-.7 3.2-1.4 4.9-2.1l1-.5 1.9-.9c12.6-5.9 24.5-13.4 35.3-22.1 16.3-11.7 27.9-28.7 32.9-48.1 3-7.1 3.1-15 .4-22.2.9-1.4 1.7-2.8 2.7-4.3 18-28.9 28.2-61.9 29.6-95.9v-2.8c0-7.3-.6-14.5-1.9-21.6z' />
        </svg>
      </div>
    )
  },
  reload: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 512 512'>
          <path fill='currentColor' d='M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z' />
        </svg>
      </div>
    )
  },
  roundedTri: size => {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }}>
        <svg viewBox='0 0 320 512'>
          <path fill='currentColor' d='M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z' />
        </svg>
      </div>
    )
  },
  octicon: (name, settings) => <Octicon icon={getIconByName(name)} height={settings.height} />
}
