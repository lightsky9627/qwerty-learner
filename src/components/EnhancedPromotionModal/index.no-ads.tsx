// 与 index.tsx 同目录的 no-ads 版本，构建时会被复制覆盖为
// src/components/EnhancedPromotionModal/index.tsx，
// 用于预防性屏蔽未来可能被接入渲染树的 QwertyLearner.ai 推广弹窗。
// 不要改动同目录下原本的 index.tsx，避免拉取上游更新时产生冲突。
import type React from 'react'

const EnhancedPromotionModal: React.FC = () => null

export default EnhancedPromotionModal
