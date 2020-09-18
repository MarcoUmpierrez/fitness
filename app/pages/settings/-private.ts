export class AsyncFileReader {
  public input: HTMLInputElement;
  private declare _boundListener: (this: AsyncFileReader) => void;

  constructor() {
    // Create the input to upload a file
    const element: HTMLElement = document.createElement('INPUT');
    this.input = element as HTMLInputElement;
    this.input.setAttribute('type', 'file');
  }

  public click(): Promise<string> {
    return new Promise<string>((resolve, _) => {
      this._boundListener = this.onChange.bind(this, resolve);
      this.input.addEventListener('change', this._boundListener);
      this.input.click();
    });
  }

  private onChange(this: AsyncFileReader, resolve: (value?: string) => void): void {
    if (this.input.files && this.input.files.length === 1) {
      const file = this.input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          resolve(e.target.result as string);
        } else {
          resolve('');
        }

        this.input.removeEventListener('change', this._boundListener);
      }

      reader.readAsText(file);
    }
  }

  public dispose() {
    this.input.remove();
  }
}

export const downloadFile = (backup: BackUp, fileName: string) => {
  // Create a link to download the generated backup file
  const element: HTMLElement = document.createElement('a');
  const link: HTMLLinkElement = element as HTMLLinkElement;
  const blob = new Blob([JSON.stringify(backup)], { type: 'text/plain' });
  link.setAttribute('target', '_blank');
  link.setAttribute('href', URL.createObjectURL(blob));
  link.setAttribute('download', fileName);
  link.click();
  link.remove();
}