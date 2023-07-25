export default () => {
  const response = {
    setting: {
      showAds: false
    }
  }
  const showAds = response?.setting?.showAds ?? true
  // 1.三目运算符
  // 2.可选链操作符(Optional Chaining Operator) ?.
  // 3. null undefined ??
  return (
    <div className="bg-slate-900 h-screen text-6xl text-white grid place-content-center">
      <p>{showAds ? '显示广告' : '不显示广告'}</p>
    </div>
  )
}
