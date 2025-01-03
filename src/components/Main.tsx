function Main() {
    const number: number = 10;
    const user: { name: string; isLogin: boolean } = {
        name: "강문수",
        isLogin: false,
    };
    return (
      <main>
        <h1>main</h1>
        <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
        <div>{user.isLogin ? (
            <div>로그아웃</div>
        ) : (
            <div>로그인</div>
        )}</div>
      </main>
    );
  };

  export default Main;