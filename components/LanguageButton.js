import React from 'react'
import gr from './locales/gr'
import en from './locales/en'
import { useRouter } from 'next/router'
const LanguageButton = () => {
    const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : gr;
  return (
    <div>

<button
className="px-4 py-2 w-40 border-2 border-white bg-gray-600 hover:bg-gray-800 transition rounded mt-4"
>
{t.Button}
</button>
    </div>
  )
}

export default LanguageButton