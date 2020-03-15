export const View = state =>
  Link({ to: state.root, class: 'Logo' }, [
    Img('/img/interspacechat.png'),
  ])

export const style = {
  img: {
    padding: '0.3em',
  },
}
