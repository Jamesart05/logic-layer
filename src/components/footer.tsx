const Footer = () => {
    return (
    <footer style={{ background: 'lightgrey', padding: '1rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Logic. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <img src="/src/assets/twitter-fill 1.png" alt="Twitter" />
          <img src="/src/assets/instagram-fill 1.png" alt="Instagram" />
          <img src="/src/assets/linkedin-box-fill 1.png" alt="LinkedIn" />
        </div>
      </div>
    </footer>

      )
}

export default Footer