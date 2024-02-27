import styles from './page.module.css'
import Link from 'next/link';



export default function Home() {
  
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

            <Link href="/administrator/itinoseki">
                <h3>    ③管理者ページ    </h3>
            </Link>
        </div>


    </main>
  )
}
