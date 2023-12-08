import {defineType} from 'sanity'

export default defineType({
  name: 'captionedImage',
  title: 'Image with Caption',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
    },
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
    },
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      title: 'caption',
    },
  },
})
