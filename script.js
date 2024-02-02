/* style.css */
body {
  font-family: 'Roboto', sans-serif;
  background-color: #282828;
  color: #fff;
  margin: 0;
  padding: 0;
}

header {
  background: #212121;
  padding: 20px 0;
}

header h1 {
  color: #ff0000;
  font-size: 2.5em;
  margin: 0;
}

header p {
  color: #bbb;
  font-size: 1.2em;
}

section {
  padding: 40px 0;
}

#latest-video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
}

#latest-video-containelr iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

footer {
  background: #181818;
  color: #aaa;
  padding: 10px 0;
  font-size: 1em;
}

/* 버튼 및 링크 스타일 */
.button {
  display: inline-block;
  background: #ff0000;
  color: #fff;
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 2px;
  text-decoration: none;
  font-size: 1em;
  transition: background-color 0.3s;
}

.button:hover {
  background: #e60000;
}

/* 미디어 쿼리를 사용하여 반응형 디자인 적용 */
@media (max-width: 768px) {
  header h1 {
      font-size: 2em;
  }

  header p {
      font-size: 1em;
  }
}
/* style.css */
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #212121;
}

.logo {
  border-radius: 50%;
  width: 120px;
  height: 120px; 
  object-fit: cover;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* style.css */
.youtube-subscribe {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.g-ytsubscribe {
  width: 100%;
  max-width: 300px;
}
/* style.css */
.center-text {
  text-align: center;
}
