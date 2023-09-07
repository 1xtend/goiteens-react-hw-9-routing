import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.number}>404</div>
      <p className={styles.text}>
        The page you were looking for <span className={styles.underline}>doesn't</span> exist.
      </p>
    </div>
  );
}
export default NotFoundPage;
