const imagePlaceholders: Readonly<Record<string, string>> = {
  '/images/pages/contacts/google.png':
    'data:image/webp;base64,UklGRl4BAABXRUJQVlA4WAoAAAAQAAAAGAAAGAAAQUxQSGoAAAABcFtbz5vIkVxyWC7DAnmpuEGOfYY5TGVZ+jp+lZQRMQE+xZO74vfs0iPyqLaD5bzi5Q9gdRLG0h8ihSWj/hE1ET0rrBP8h79melExEXm3wSYp+sECmTgJY5vzKlNYrqrkEbUOiYNehxH5VlA4IM4AAAAwBgCdASoZABkAPwF0rlKrJqOiqAqpYCAJbACsGaA2zvP/2TGAxkvqBNd/3WxEq9RC/zhDNQ3LhMAAAP7uBMQBHrwlK8aGP5v82cCO03l10qk+TmKF0p1o/IU60LT9QFDfTuNCEdDKx1H+s4aM9Xf9j4Ku5nfQYmC5EwRFGAi99ULGKn1yrN1cUA7W2o9RWsmAtd9x2hg+j71rLYXwULRnhRCxhpL9EdBYSDuL2Eb5T15dK5vvwf1lJk+YxPWmNuvE4q3ezJ/ZbP1OoXgAAA==',
  '/images/pages/contacts/linkedin.png':
    'data:image/webp;base64,UklGRmABAABXRUJQVlA4WAoAAAAQAAAAGAAAGAAAQUxQSGoAAAABcFtbz5vIkVxyWC7DAnmpuEGOfYY5TGVZ+jp+lZQRMQE+xZO74vfs0iPyqLaD5bzi5Q9gdRLG0h8ihSWj/hE1ET0rrBP8h79melExEXm3wSYp+sECmTgJY5vzKlNYrqrkEbUOiYNehxH5VlA4INAAAACQBQCdASoZABkAPwFwsVIrJiSiqAqpYCAJbACdMoSCsQAu0kAzgdxeZ7ktSr9HOaDW+Mxa8AD50uFsK9rTRFM54TjpKMTDulqvuZMVnjup3VpAmDSF2RT2CAhhiJ7lOVknm6PGyDdvdLwRBg8v9sWn7t0qOEADyqeD59HzoS8XR3AQe5/4OTFNqOlLNjuhzVBQ+fPe/3imdwCxnBPTxdKnw7ofJ1B2PJeLX5Fe/y7bb7SXz/aERvhgH9OO6YsYT/0+skAW/fLksH/vWkkLoAAA',
  '/images/pages/contacts/telegram.png':
    'data:image/webp;base64,UklGRlIBAABXRUJQVlA4WAoAAAAQAAAAGAAAGAAAQUxQSGoAAAABcFtbz5vIkVxyWC7DAnmpuEGOfYY5TGVZ+jp+lZQRMQE+xZO74vfs0iPyqLaD5bzi5Q9gdRLG0h8ihSWj/hE1ET0rrBP8h79melExEXm3wSYp+sECmTgJY5vzKlNYrqrkEbUOiYNehxH5VlA4IMIAAABwBQCdASoZABkAPwFurlArJiQiqA1RYCAJbACdMoRwN6rbgAKOuLxldsXL+uL+OF1vtMkAAN2PjPSuo/1l0M/uoTCDz1bMkeW0INfw3hjhV2P4gYsfw2NEHR/rKulLgrq0F8MPVvrthgIzuCvdWPdbrJGzCOlwwQhZFwGaSTAKMtxlk9iw4CnVPIK0cllBhJpp1IEXFEgQmjExX8QuqJTAvYE0dbpr8s2cJPld7m6ji7S+0qt8/49oB2CYnk2UhPQAAA==',
  '/images/pages/contacts/youtube.png':
    'data:image/webp;base64,UklGRjIBAABXRUJQVlA4WAoAAAAQAAAAGAAAGAAAQUxQSGoAAAABcFtbz5vIkVxyWC7DAnmpuEGOfYY5TGVZ+jp+lZQRMQE+xZO74vfs0iPyqLaD5bzi5Q9gdRLG0h8ihSWj/hE1ET0rrBP8h79melExEXm3wSYp+sECmTgJY5vzKlNYrqrkEbUOiYNehxH5VlA4IKIAAACQBQCdASoZABkAPwFoq08rJaO9MBgMA6AgCWwAnTKEdJe13RgCRXD5WEtksF5vz6jrK0T7YAD19BinMTPaSw/pN7YBBzjQ0IMk0r7aWTv/OaBlzb/tIQFdoZAKvTFzOet2Fsge1t89SeZqZ6ySlBKT6cr1qkS8lFWtmO3T5XwpcfvKf7K0/pzI0W6zqfQXlpp4TJDFSWmuL+q/SSBsc2NAAAA=',
  '/images/pages/music.png':
    'data:image/webp;base64,UklGRqgAAABXRUJQVlA4IJwAAABwBACdASoZABEAPwF2slQrJySjKAgBYCAJYwDGigAADF+lqdhHVNQWmdJTAAD+P/9wqNuMP/6NlgzpLXvMXkRNHNGakhLLkllnkaM5M0F4cIP1hWOirudAX+sbXswmbRjHgqsggrg2/8HO4Sdvla2u7nX2QbOLGgpMM5vwXEV+FBNK3YmaFYZzknMLnOoob/0n4yQZnbsiN54lIAA=',
  '/images/pages/projects/goalcraft.png':
    'data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAAAwBACdASoZABEAPwF0sVOrJqQiqAgBYCAJQBdgAiJHRvUsIvN2EiOB5cAA/u1JHxNPJ7eaAxuq+wHpvTsIw5dKrhusFicfr0HpFOQ0MsjEx5luMIOrdXxq/FDB1yPUI0VOFx5xP0cNLG7Ct+4I6Ww9Ds9YFIAA',
  '/images/pages/projects/lifetimer.jpg':
    'data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAADQBACdASoZABEAPwF0rlKrJqQiqAqpYCAJYwC7Ef/gHoJvykYL5FM1Lgwl8ZloAAD+4u65bm4kyeHdLLj5N1U/4Qo3dqdncfWro1/m3cienX2wke2kN9pWGFepL+DA/aJR/GR6jgVDTd9maSBBkGiWL1khlZh1BxLT+GiB3uqLfLArUgbE7i7oiOAAAA==',
  '/images/pages/projects/protomeal.jpg':
    'data:image/webp;base64,UklGRroAAABXRUJQVlA4IK4AAACQBACdASoZABIAPwF0rlKrJqQiqAqpYCAJZgCdMtDA0xT57vVLgpue12uxcQAA6F6buiCK7eMKnH6SARElUYj9Z3CklPM0oOjKTTYE4uZOjZwwLg8zOJyskTvLuAYnE3XevNNG5Bdb9KdVGqIdr+dHDnyhtJd6yCF/FwhGmzXoj/WclHLwAmm6y6//e6cR2IGmuoOacZBJPVO7zngR0xvTK55Mwol7/L++P1p4AAA=',
  '/images/pages/projects.png':
    'data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAADQBACdASoZABEAPwFysVIrJqSiqAqpYCAJZQAAI3j7AqGZ2xjU5PxMfc8HfJTeuAD9GU2wpso85ZnWXtiiPKFp5uwXIO1phqPOcJv+/3rpOk83f5/PkQV5JtK3FILYbsnD59YOdkZBKLrquzHrR2g87w0GmXiOSsIOPbBMskpWe6fEJrFlAAAA',
  '/images/pages/writing/demon.jpg':
    'data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAACQBACdASoZABEAPwFys1GrJqSiqAqpYCAJZgCxH1XBpAjJnZOcOPlOrecF+AAA/uvl36zkfQlDCwhaBlOiHndafYOy/p3HlZ2pt+XhDTlGXLK42CQGA2McLDriQklFJmsjonW4dF/0FvjR+kXEXFLo4n0AK0AA',
  '/images/pages/writing/glory-of-herostrat.jpg':
    'data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAACwBACdASoZABEAPwFysFKrJqSiqAqpYCAJaACdM2QBqkTihFAfPa0WM4yhc0RAAP7ehCqnfn0nYkB9BXdhTx9xqxcRHPBnVdyDapdKr1W9xZjDvVuzqFmepKNeiVyhA2NBSA1eEB3gTBk2zLK+XsHPXtqFMhVPB0946CCtx6cfbPwAAAA=',
  '/images/pages/writing/hard-question.jpg':
    'data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAADwAwCdASoZABEAPwForE6rJaQiMAgBYCAJZQAAV/7jjVXdIFUy/158AP7r+MWb9sejBFhNVib/Qd+cG28rTNUkQuSqA49Z138cAwZvGk2kZ57YnYLtU7/esxPVzdAXXo6UfHiXDEIAAA==',
  '/images/pages/writing/hoe-or-not-hoe.jpg':
    'data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAAAQBACdASoZABEAPwFyslIrJqSiqAqpYCAJZQDLLBBdeiT6ajZPb9w44AD+2abhBygwW3xe3+7VW0iVZOvEKJcMMpKHsI9XZBdLnAzEfmLx+B6tSj1I8+kSde5iq9tBI4UuaOztvnNC/+MQT+Ebm++xYJ/Ky0nfa3E8p7Ves3NdFbiNCY+3fpXAAAA=',
  '/images/pages/writing/not-so-unequivocally.jpg':
    'data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADQAwCdASoZAA8APwForE6rJaQiMAgBYCAJYwCdABbztEFyV4pNDAAA/t4W0gsSjRKvCZ5sdj9etNS+cHjkkBLZqV4MV8/HBd5tWwVXJBCJ5jsjguEPpi+BHsyzo+7Gbr6nVKphs3hYggAA',
  '/images/pages/writing/old-fibr-hook.jpg':
    'data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAQBACdASoZABMAPwFqr1ErJaQisBgIAWAgCWcAz6AN15DqnQ91A50jAAD+7qGORGjqcbPbTfvwyTNnz3qnooWHLt6mIh0i3XGw9wbqI2jh4vNG3WyVyAAA',
  '/images/pages/writing.png':
    'data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAABwBACdASoZAA8APwForE6rJiQiMAgBYCAJZQDCgYwcpopt2hQq/4HH5ciQAAD+5fCuq3ob0xraalk/0G3qE+4cUB1TVqBZDh9xJ++42X26HLQO7oHPQ7om8hesLEEO2Lphsn8fW6u9WXM+ytsb/GcpL4QCYn2XacfLKROnnAPXaq+ezQpMp3+AAAA=',
};

export function getImagePlaceholder(source: string): string {
  const placeholder = imagePlaceholders[source];

  if (!placeholder) {
    throw new Error(`Missing image placeholder for ${source}`);
  }

  return placeholder;
}
