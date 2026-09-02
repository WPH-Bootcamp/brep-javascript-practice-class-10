type SearchPreviewProps = {
  value: string;
};

function SearchPreview({ value }: SearchPreviewProps) {
  return (
    <div>
      <strong>PREVIEW</strong>
      <p>{value || 'Belum ada pencarian'}</p>
    </div>
  );
}

export default SearchPreview