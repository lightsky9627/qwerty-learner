// 与 index.tsx 同目录的 no-ads 版本，构建时会被复制覆盖为
// src/components/DonateCard/index.tsx，用于屏蔽“每完成 5 章节弹一次”的捐赠弹窗。
// 不要改动同目录下原本的 index.tsx，避免拉取上游更新时产生冲突。
export const DonateCard = () => null
