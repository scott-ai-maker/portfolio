import sharp from 'sharp'

const imageIds = [1, 2, 3]
const widths = [352, 576]
const basePath = 'public/images/photos'

async function generate() {
  for (const imageId of imageIds) {
    const input = `${basePath}/image-${imageId}.svg`

    for (const width of widths) {
      await sharp(input)
        .resize({ width })
        .webp({ quality: 82, effort: 5 })
        .toFile(`${basePath}/image-${imageId}-${width}.webp`)

      await sharp(input)
        .resize({ width })
        .png({ compressionLevel: 9 })
        .toFile(`${basePath}/image-${imageId}-${width}.png`)
    }
  }
}

generate()
  .then(() => {
    console.log('Gallery assets generated successfully.')
  })
  .catch((error) => {
    console.error('Failed to generate gallery assets:', error)
    process.exit(1)
  })
