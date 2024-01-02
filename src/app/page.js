import Image from 'next/image'
import styles from './page.module.css'

import { doc,getDoc } from 'firebase/firestore';
import Link from 'next/link';
import db from './fireOrigin';



export default function Home() {
  
  // Initialize Firebase
  async function name(params) {
    // const driverListPath = doc(db, "rikutaka", "2023")
    // const driverList = await getDoc(driverListPath)
    // console.log(driverList.data())
  }

  name()
  console.log(1)
  
  return (
    <main className={styles.main}>


        <img className={styles.logo} src="/children.jpg"/>

        <div>
            <Link  href="/sign_in">
                <h3>    ①アカウント作成ページ     </h3>
            </Link>

            <Link  href="/in">
                <h3>    ②出退勤ページ     </h3>
            </Link>

            <Link  href="/check">
                <h3>    ③確認ページ     </h3>
            </Link>

            <Link href="/administrator">
                <h3>    ④管理者ページ    </h3>
            </Link>
        </div>


    </main>
  )
}
