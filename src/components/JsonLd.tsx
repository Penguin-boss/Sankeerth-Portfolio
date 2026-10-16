/**
 * Structured data.
 *
 * Rendered with dangerouslySetInnerHTML because JSON-LD is not executable: the
 * only risk is a `</script>` sequence inside a value, which JSON.stringify
 * cannot emit from the string data used here (all values come from the content
 * file, none from user input).
 */
export default function JsonLd({ data }: { readonly data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
